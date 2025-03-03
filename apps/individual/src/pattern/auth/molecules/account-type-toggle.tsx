import { FC } from 'react'
import { cn, IIconProps, ToggleGroupItem } from '@chainkeeping/ui'

export interface IAccountTypeToggleProps {
    Icon: any,
    title: string,
    description: string,
    value: string;
    toggleGroupValue: string;
}

const AccountTypeToggle: FC<IAccountTypeToggleProps> = ({ description, Icon, title, value, toggleGroupValue }) => {
    return (
        <ToggleGroupItem value={value} aria-label={title} size="custom" variant="outline" className={cn('min-w-full max-w-[306px] bg-transparent w-full h-fit lg:h-[96px] flex items-start justify-normal gap-3 p-4 rounded-[12px] border hover:bg-transparent hover:border-border focus-visible:bg-transparent data-[state=on]:bg-secondary-accent data-[state=on]:text-secondary data-[state=on]:border-secondary transition-all duration-200 ease-in-out')}>
            <div className='w-fit h-fit'>
                {Icon}
            </div>
            <div className='w-full flex flex-col gap-y-2'>
                <h4 className='h-fit text-left text-sm whitespace-nowrap font-dmsans font-bold transition-colors duration-200 ease-in-out'>{title}</h4>
                <p className={cn('text-left text-sm font-dmsans transition-colors duration-200 ease-in-out', toggleGroupValue === value ? "text-foreground" : "text-gray-400" )}>{description}</p>
            </div>
        </ToggleGroupItem>
    )
}

export default AccountTypeToggle