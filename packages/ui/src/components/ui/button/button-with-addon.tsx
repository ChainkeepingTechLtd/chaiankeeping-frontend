import React from 'react'
import { Slot } from "@radix-ui/react-slot"
import { cn } from '@/lib/utils'
import { Button, ButtonProps } from './button'

interface ButtonWithAddonProps extends ButtonProps {
    addon?: React.ReactNode
    addonPosition?: 'start' | 'end'
    addonClassName?: string
}

export const ButtonWithAddon = React.forwardRef<HTMLButtonElement, ButtonWithAddonProps>(
    ({ className, addon, addonPosition = 'start', addonClassName, children, ...props }, ref) => {
        return (
            <Button
                ref={ref}
                className={cn(
                    "flex items-center",
                    addonPosition === 'start' ? "pl-3" : "pr-3",
                    className
                )}
                {...props}
            >
                {addonPosition === 'start' && addon && (
                    <Slot className={cn("mr-[10px]", addonClassName)}>{addon}</Slot>
                )}
                {children}
                {addonPosition === 'end' && addon && (
                    <Slot className={cn("ml-[10px]", addonClassName)}>{addon}</Slot>
                )}
            </Button>
        )
    }
)

ButtonWithAddon.displayName = 'ButtonWithAddon'

