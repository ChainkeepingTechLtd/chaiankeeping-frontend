import { cn } from '@chainkeeping/ui'
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLParagraphElement>

const HeaderLabel = ({ children, className, ...props }: Props) => {
    return (
        <p className={cn('font-space_Grotesk font-medium text-secondary', className)} {...props}>{children}</p>
    )
}

export default HeaderLabel