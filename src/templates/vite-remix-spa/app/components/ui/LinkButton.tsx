import { Link, type LinkProps } from '@remix-run/react';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './Button';
import { cn } from '@/utils/styles';

type LinkButtonProps = LinkProps & VariantProps<typeof buttonVariants>;

const LinkButton = (props: LinkButtonProps) => (
  <Link
    {...props}
    className={cn(
      buttonVariants({
        variant: props.variant,
        size: props.size,
        className: props.className,
      }),
    )}
  >
    {props.children}
  </Link>
);

export default LinkButton;
