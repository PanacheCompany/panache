import * as React from 'react'

import { cn } from '#common/ui/lib/utils'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[60px] w-full rounded-md border border-neutral-300 bg-background px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:ring-4 focus-visible:outline-none focus:border-neutral-500 focus-visible:ring-neutral-200 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
