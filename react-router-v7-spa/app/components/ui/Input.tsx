import * as React from 'react';

import { cn } from '@/utils/styles.ts';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, errorMessage, label, ...props }, ref) => {
    return (
      <div className={className}>
        <label htmlFor={props.id}>
          {label}
          <input
            type={type}
            className={cn(
              'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            )}
            ref={ref}
            {...props}
          />
        </label>
        {!!errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
