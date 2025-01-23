import * as React from 'react';

import { cn } from '@/lib/utils';
import { SearchIcon } from './search.tsx';
import { LoaderPinwheelIcon } from './loader-pinwheel.tsx';

interface InputProps extends React.ComponentProps<'input'> {
  isLoading?: boolean;
  formRef?: React.RefObject<HTMLFormElement>;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isLoading = false, formRef, ...props }, ref) => {
    const handleIconClick = () => {
      formRef?.current?.requestSubmit();
    };
    return (
      <div className="relative w-2/3 min-w-[400px]">
        <input
          type={type}
          className={cn(
            'flex h-auto min-h-12 text-wrap w-full rounded-md border border-border bg-background-accent text-foreground px-3 pr-12 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className
          )}
          ref={ref}
          disabled={isLoading}
          {...props}
        />
        <div
          className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={handleIconClick}
        >
          {isLoading ? <LoaderPinwheelIcon /> : <SearchIcon />}
        </div>
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
