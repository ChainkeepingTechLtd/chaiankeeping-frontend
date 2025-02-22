import { cn, ThSortIcon } from '@chainkeeping/ui';
import React from 'react'

interface IProps {
    className?: string;
    title: string
    onClick?: () => void
}

const CustomThead = ({ className, title, onClick }: IProps) => {
    return (
        <div onClick={() => onClick?.()} className={cn('w-fit flex items-center gap-2 cursor-pointer', className)}>
            <span className='text-primary font-bold font-dmsans'>{title}</span>
            <ThSortIcon />
        </div>
    )
}

export default CustomThead