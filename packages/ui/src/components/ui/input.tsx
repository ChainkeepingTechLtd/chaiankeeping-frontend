import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const inputVariants = cva(
	"appearance-none flex items-center justify-start gap-[8px] flex h-[50px] w-full rounded-[6px] bg-[hsla(0,0%,100%,1)] font-medium px-3 py-2 text-base transition-colors border border-[hsla(213,27%,84%,1)] file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-[hsla(213,27%,84%,1)] placeholder:font-[400] focus:outline-none disabled:cursor-not-allowed disabled:bg-border disabled:border-border placeholder:text-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
	{
		variants: {
			variant: {
				default:
					"text-[hsla(216,26%,30%,1)] hover:border-secondary focus:border-secondary focus:ring-[3px] focus:ring-[var(--ring-primary)] rounded-[6px]",
				error:
					"bg-[hsla(0,86%,61%,0.05)] border border-[hsla(0,86%,61%,1)] disabled:border-border rounded-[6px] text-[hsla(216,30%,18%,1)] focus:ring-[3px] focus:ring-[hsla(0,86%,61%,0.05)]",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
	VariantProps<typeof inputVariants> { }

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, variant, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(inputVariants({ variant, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
