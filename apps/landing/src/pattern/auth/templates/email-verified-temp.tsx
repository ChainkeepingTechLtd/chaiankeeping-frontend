import React from 'react'
import Link from 'next/link'
import { APP_ROUTES } from '@/lib/routes'
import { BrandLogo, Card, CardDescription, CardHeader, CardTitle, Button } from '@chainkeeping/ui'
import EmailVerifiedIcon from '../atoms/email-verified-icon';
import { useSearchParams } from 'next/navigation';
import { handleLoginRouting } from '@/lib/utils/handle-login-routing';

const EmailVerifiedTemp = () => {
    const searchParams = useSearchParams()
    const persona = searchParams.get('persona')

    const handleLogin = () => {
        handleLoginRouting(persona as "" | "personal" | "company" | "practitioners")
    }

    return (
        <div className='w-full max-w-[437px] flex flex-col items-start md:items-center gap-y-8 px-[18px] md:px-0 pb-[144px]'>
            <Link href={APP_ROUTES.index}>
                <BrandLogo />
            </Link>

            <Card className="bg-white w-full max-w-[438px] h-fit flex flex-col items-center gap-y-8 p-6 rounded-[8px] card-shadow border-none">
                <span><EmailVerifiedIcon /></span>
                <CardHeader className="h-fit flex flex-col items-center gap-y-2 !mt-0">
                    <CardTitle className="text-base font-medium font-sen">Email verified successfully</CardTitle>
                    <CardDescription className="text-sm text-[hsla(215,16%,47%,1)] text-center !mt-0">{
                        persona === "practitioners" ? "Your email has been successfully verified! To continue, please complete the required assessment." : "Your email has been successfully verified! You can now proceed to your dashboard."}</CardDescription>
                </CardHeader>
                <Button
                    size="lg"
                    onClick={() => handleLogin()}
                    className="w-full text-base font-medium !mt-0"
                >
                    {persona === "practitioners" ? "Take Assessment" : "Proceed to Login"}
                </Button>
            </Card>
        </div>
    )
}

export default EmailVerifiedTemp