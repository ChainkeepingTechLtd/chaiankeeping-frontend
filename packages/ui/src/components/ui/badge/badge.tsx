import React from 'react';

import { cva, type VariantProps } from "class-variance-authority"
import { BadgeStyle } from "./style"
import { cn } from "@/lib/utils"

const badgeVariants = cva(BadgeStyle.base, {
    variants: {
        variant: BadgeStyle.variants,
        size: BadgeStyle.size,
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
})

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof badgeVariants>

const Badge = ({ className, variant, size, ...props }: BadgeProps) => {
    return (
        <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
    )
}

export { Badge, badgeVariants, BadgeStyle }