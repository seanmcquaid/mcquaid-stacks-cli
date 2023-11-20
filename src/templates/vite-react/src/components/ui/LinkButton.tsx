import type { LinkProps } from 'react-router-dom';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './Button';
import { Link, type Params, type Path } from '@/router';
import { cn } from '@/utils/styles';

type LinkButtonProps<
  P extends
    | Path
    | {
        pathname: Path;
        search?: string | undefined;
        hash?: string | undefined;
      },
> = LinkProps &
  VariantProps<typeof buttonVariants> &
  (P extends keyof Params
    ? {
        to: P;
        params: Params[P];
      }
    : P extends {
          pathname: Path;
          search?: string | undefined;
          hash?: string | undefined;
        }
      ? P['pathname'] extends keyof Params
        ? {
            to: P;
            params: Params[P['pathname']];
          }
        : {
            to: P;
            params?: undefined;
          }
      : {
          to: P;
          params?: undefined;
        });

const LinkButton = <P extends Path>(props: LinkButtonProps<P>) => (
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
