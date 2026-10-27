import type { ContactInput } from '@/lib/validators';

/**
 * E-mail que a IDEON recebe a cada contato do formulário.
 *
 * Feito para responder rápido: no topo, quem é e o que quer; logo abaixo, um
 * botão que abre o WhatsApp da pessoa com uma primeira mensagem já escrita, e
 * outro que abre a resposta por e-mail. Campos vazios não aparecem (a versão
 * anterior listava "não informado" em metade das linhas).
 */

const ORIGENS: Record<string, string> = {
  'cta-final': 'Formulário no fim da página',
  contato: 'Formulário de contato',
};

const escape = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c);

/** Número para o wa.me: só dígitos, com 55 na frente quando vier só DDD + número. */
const whatsappDigits = (phone: string) => {
  const digits = phone.replace(/\D/g, '');
  return digits.length <= 11 ? `55${digits}` : digits;
};

const firstName = (name: string) => name.trim().split(/\s+/)[0] ?? name;

/** "Sistema ou plataforma" vira "sistema ou plataforma" no meio da frase; siglas como SaaS ficam. */
const midSentence = (type: string) => (/^SaaS/.test(type) ? type : type.charAt(0).toLowerCase() + type.slice(1));

export function buildLeadEmail(data: ContactInput, receivedAt: Date) {
  const name = data.name.trim();
  const when = receivedAt.toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    dateStyle: 'short',
    timeStyle: 'short',
  });
  const origin = ORIGENS[data.source ?? ''] ?? data.source ?? 'Site';

  const greeting = `Oi, ${firstName(name)}! Aqui é da IDEON. Recebemos seu contato pelo site sobre ${midSentence(data.projectType)}. Pode me contar um pouco mais da sua ideia?`;
  const whatsappLink = `https://wa.me/${whatsappDigits(data.phone)}?text=${encodeURIComponent(greeting)}`;
  const emailLink = data.email
    ? `mailto:${data.email}?subject=${encodeURIComponent('IDEON: sobre o seu contato')}&body=${encodeURIComponent(`${greeting}\n\n`)}`
    : null;

  const rows: [string, string][] = [
    ['WhatsApp', data.phone],
    ...(data.email ? ([['E-mail', data.email]] as [string, string][]) : []),
    ['Interesse', data.projectType],
    ['Veio de', origin],
    ['Recebido', when],
  ];
  if (data.estimate) {
    rows.push(['Estimativa', `R$ ${data.estimate.total.toLocaleString('pt-BR')}, cerca de ${data.estimate.weeks} semanas`]);
  }

  const subject = `Novo contato: ${name} (${data.projectType})`;

  const text = [
    `${name} quer conversar sobre ${midSentence(data.projectType)}.`,
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    ...(data.message ? ['', 'Mensagem:', data.message] : []),
    '',
    `Responder no WhatsApp: ${whatsappLink}`,
    ...(emailLink ? [`Responder por e-mail: ${data.email}`] : []),
  ].join('\n');

  const button = (href: string, label: string, primary: boolean) =>
    `<a href="${escape(href)}" style="display:inline-block;padding:12px 20px;margin:0 8px 8px 0;border-radius:999px;font-weight:600;font-size:15px;text-decoration:none;${
      primary ? 'background:#0B0B0D;color:#F6F6F4;' : 'background:#F6F6F4;color:#0B0B0D;border:1px solid #D4D4D8;'
    }">${label}</a>`;

  const html = `<!doctype html>
<html lang="pt-BR"><body style="margin:0;padding:24px;background:#F6F6F4;font-family:Arial,Helvetica,sans-serif;color:#0B0B0D;">
  <div style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E4E4E7;border-radius:16px;padding:28px;">
    <p style="margin:0 0 4px;font-size:13px;color:#71717A;">Novo contato pelo site</p>
    <h1 style="margin:0 0 6px;font-size:24px;line-height:1.2;">${escape(name)}</h1>
    <p style="margin:0 0 22px;font-size:16px;color:#3F3F46;">Quer conversar sobre <strong>${escape(midSentence(data.projectType))}</strong>.</p>
    <div style="margin:0 0 22px;">
      ${button(whatsappLink, 'Responder no WhatsApp', true)}
      ${emailLink ? button(emailLink, 'Responder por e-mail', false) : ''}
    </div>
    <table role="presentation" style="width:100%;border-collapse:collapse;font-size:15px;">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:10px 0;border-top:1px solid #E4E4E7;color:#71717A;width:110px;vertical-align:top;">${label}</td><td style="padding:10px 0;border-top:1px solid #E4E4E7;">${escape(value)}</td></tr>`,
        )
        .join('')}
    </table>
    ${
      data.message
        ? `<p style="margin:22px 0 6px;font-size:13px;color:#71717A;">Mensagem</p><p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escape(data.message)}</p>`
        : ''
    }
  </div>
</body></html>`;

  return { subject, text, html };
}
