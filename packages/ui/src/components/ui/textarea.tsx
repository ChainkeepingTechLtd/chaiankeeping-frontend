import React, { forwardRef } from "react"

import { cn } from "../../lib/utils"
import { VariantProps } from "class-variance-authority"
import { inputVariants } from "./input"

export interface ITextAreaProps
    extends React.InputHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputVariants> { }

const Textarea = forwardRef<
    HTMLTextAreaElement,
    ITextAreaProps
>(({ className, variant, ...props }, ref) => {
    return (
        <textarea
            className={cn("flex min-h-[80px] w-full rounded-md border border-[#E9E9F0] bg-background px-3 py-2 text-base hover:border-secondary placeholder:text-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus:border-secondary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", inputVariants({ variant, className }))}
            ref={ref}
            {...props}
        />
    )
})
Textarea.displayName = "Textarea"

export { Textarea }
