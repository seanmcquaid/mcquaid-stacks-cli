import type * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/styles';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Alert = ({
  className,
  variant,
  ...props
}: React.HTMLProps<HTMLDivElement> & VariantProps<typeof alertVariants>) => (
  <div
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
);
Alert.displayName = 'Alert';

const AlertTitle = ({
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement> & {
  className?: string;
}) => (
  <h5
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  >
    {props.children}
  </h5>
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = ({
  className,
  ...props
}: React.HTMLProps<HTMLParagraphElement> & {
  className?: string;
}) => (
  <div className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
