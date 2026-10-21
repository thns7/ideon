'use client';

import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Botão da IDEON.
 *
 * O principal é o oposto do chão: marfim no carvão, carvão no marfim, como as
 * versões positiva e negativa do logo (`bg-brand` muda com `data-ground`).
 * Os outros mudam de estado pelo TRAÇO (contorno que acende, sublinhado),
 * nunca só pela cor, e nenhum brilha. A seta desliza 4px no hover.
 */
const buttonVariants = cva(
  'group/btn relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-pill font-medium leading-none transition-[transform,color,background-color,border-color] duration-micro ease-expo active:translate-y-px disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-brand-ink hover:bg-brand-hover',
        secondary: 'border border-line bg-transparent text-title hover:border-title',
        outline: 'border border-line bg-transparent text-title hover:border-title',
        ghost: 'text-body underline-offset-[0.3em] hover:text-title hover:underline',
        accent: 'bg-accent text-carbon hover:bg-accent/90',
      },
      size: {
        sm: 'h-10 px-4 text-body-sm',
        md: 'h-12 px-6 text-body-sm',
        lg: 'h-14 px-7 text-body',
        xl: 'h-16 px-9 text-lead',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    /** Ícone à direita: recebe o deslize no hover automaticamente. */
    trailing?: ReactNode;
    leading?: ReactNode;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, asChild = false, trailing, leading, children, ...props },
  ref,
) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {leading}
      {/* Slottable é o que faz `asChild` funcionar com irmãos ao redor: o
          Radix funde as classes no elemento filho (ex.: <Link>) e mantém a
          seta como filha dele. */}
      <Slottable>{children}</Slottable>
      {trailing ? (
        <span className="transition-transform duration-300 ease-expo group-hover/btn:translate-x-1">
          {trailing}
        </span>
      ) : null}
    </Comp>
  );
});

export { buttonVariants };
