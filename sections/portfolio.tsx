'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from '@/components/icons/ui-icons';
import { Reveal } from '@/components/motion/reveal';
import { ProjectFrame } from '@/components/project-frame';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { projects, type Project } from '@/content/projects';
import { track } from '@/lib/analytics';

/** O que o Dreamclin faz, em três partes. Só dele: é o produto em destaque. */
const FEATURED_PARTS = ['Agenda e prontuário', 'Financeiro', 'CRM do WhatsApp'];

/**
 * Produtos: a seção que prova o posicionamento.
 *
 * Todos os produtos juntos, sem separar os da IDEON dos feitos para clientes
 * (decisão do Thiago). A diferença existe no dado (`owner` em
 * content/projects.ts) e na ordem: os próprios vêm primeiro. O Dreamclin abre
 * grande, com a tela do sistema ocupando metade da largura; os outros vêm numa
 * grade simples de imagem, nome, estado e uma linha. Sem card, sem sombra: a
 * interface de cada produto é o visual. Cada item leva à página do produto
 * (/projetos/[slug]).
 */
export function Portfolio() {
  const [featured, ...rest] = projects;

  return (
    <section data-ground="ivory" id="produtos" aria-labelledby="produtos-titulo" className="section-y relative">
      <div className="shell">
        <SectionHeading titleId="produtos-titulo" title="Ideia vira produto. Estes já viraram." />

        {featured ? <Featured project={featured} /> : null}

        <ul className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-28">
          {rest.map((project, index) => (
            <li key={project.slug}>
              <Reveal delay={0.06 * (index % 2)}>
                <ProductItem project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Status({ children }: { children: string }) {
  return <span className="text-body-sm text-muted">{children}</span>;
}

function Featured({ project }: { project: Project }) {
  const domain = project.liveUrl?.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  return (
    <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
      <div className="min-w-0 lg:col-span-4">
        <Reveal>
          <Status>{project.status}</Status>
          <h3 className="mt-3 text-display-xl text-title">{project.client}</h3>
          <p className="mt-5 text-lead text-body">{project.oneLiner}</p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-body-sm text-muted">
            {FEATURED_PARTS.map((part) => (
              <li key={part}>{part}</li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            {project.liveUrl ? (
              <Button
                asChild
                trailing={<ArrowUpRight className="h-4 w-4" />}
                onClick={() => track('project_open_live', { slug: project.slug })}
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  {domain}
                  <span className="sr-only">, abre em nova aba</span>
                </a>
              </Button>
            ) : null}
            <Button
              asChild
              variant="ghost"
              trailing={<ArrowRight className="h-4 w-4" />}
              onClick={() => track('project_view', { slug: project.slug })}
            >
              <Link href={`/projetos/${project.slug}`}>Como foi construído</Link>
            </Button>
          </div>
        </Reveal>
      </div>

      {/* A tela do produto é a peça visual da seção: entra subindo de leve e
          ocupa o espaço de uma imagem de capa. */}
      <Reveal delay={0.1} className="min-w-0 lg:col-span-8">
        <ProjectFrame
          project={project}
          priority={false}
          sizes="(max-width: 1024px) 94vw, 860px"
          className="shadow-e2"
        />
      </Reveal>
    </div>
  );
}

/**
 * O item inteiro é o link para a página do produto: o `::after` esticado do
 * nome cobre a imagem e o texto, com um destino só no DOM.
 */
function ProductItem({ project }: { project: Project }) {
  return (
    <article className="group relative">
      <div className="overflow-hidden rounded-[18px]">
        <div className="transition-transform duration-700 ease-expo group-hover:scale-[1.02]">
          <ProjectFrame project={project} sizes="(max-width: 640px) 100vw, 640px" />
        </div>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-display-sm text-title">
          <Link
            href={`/projetos/${project.slug}`}
            onClick={() => track('project_view', { slug: project.slug })}
            className="underline-offset-[0.2em] after:absolute after:inset-0 after:content-[''] group-hover:underline"
          >
            {project.client}
          </Link>
        </h3>
        <Status>{project.status}</Status>
      </div>
      <p className="mt-2 max-w-md text-body text-muted">{project.oneLiner}</p>
    </article>
  );
}
