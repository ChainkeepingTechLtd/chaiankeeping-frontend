import AppleLogoIcon from '@/pattern/common/atoms/apple-logo-icon'
import GoogleLogoIcon from '@/pattern/common/atoms/google-logo-icon'
import React, { FC, ReactElement, useEffect, useState } from 'react'

interface IProps {
    onClick: () => void
    social: "Google" | "Apple"
}

const SocialsLoginWidget: FC<IProps> = ({ onClick, social }) => {
    const [SocialIcon, setSocialIcon] = useState<ReactElement | null>(null)

    useEffect(() => {
        if (social) {
            switch (social) {
                case 'Apple':
                    setSocialIcon(<AppleLogoIcon />)
                    break
                case 'Google':
                    setSocialIcon(<GoogleLogoIcon />)
                    break
                default:
                    setSocialIcon(<GoogleLogoIcon />)
            }
        }
    }, [])

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            }}
            className='w-full h-12 flex items-center justify-start gap-[10px] py-3 px-4 border rounded-[6px] shadow-sm'
        >
            <span>{SocialIcon}</span>
            <p className='text-foreground text-base font-dmsans'>Sign up with {social}</p>
        </div>
    )
}

export default SocialsLoginWidget