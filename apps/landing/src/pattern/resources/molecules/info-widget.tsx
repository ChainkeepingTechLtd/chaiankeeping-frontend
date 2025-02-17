import React, { FC, ReactElement } from 'react'
import InfoIcon from '../atoms/info-icon'
import { cn } from '@chainkeeping/ui';

interface IProps {
    info: string;
    className?: string
    Icon?: ReactElement;
}

const InfoWidget: FC<IProps> = ({ info, Icon, className }) => {
    return (
        <div className={cn('bg-[hsla(28,91%,96%,1)] w-full h-fit lg:h-[102px] flex items-start text-sm lg:text-base font-dmsans font-medium leading-[26px] gap-4 py-3 px-4 border-l-4 border-l-[hsla(28,91%,54%,1)] rounded-r-[8px]', className)}>
            <div>
                {Icon ?? <InfoIcon />}
            </div>
            <p className=''>
                {info}
            </p>
        </div>
    )
}

export default InfoWidget