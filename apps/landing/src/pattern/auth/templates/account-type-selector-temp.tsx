import { FC, useState } from 'react'
import { BrandLogo, Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@chainkeeping/ui'
import AccountTypeToggleGroup from '../organisms/account-type-toggle-group'
import Link from 'next/link'
import { APP_ROUTES} from '@/lib/routes'
import { useRouter } from 'next/navigation'
import { handleLoginRouting } from '@/lib/utils/handle-login-routing'

interface IProps {
    pathname: string
}

const AccountTypeSelectorTemp: FC<IProps> = ({ pathname }) => {
    const [accountType, setAccountType] = useState<"personal" | "company" | "practitioners" | "">("")

    const { push } = useRouter()

    const handleContinue = () => {
        if (pathname === APP_ROUTES.signup) {
            push(`${APP_ROUTES.signup}/${accountType}`)
        } else (
            handleLoginRouting(accountType)
        )
    }

    return (
        <div className='w-fit flex flex-col items-start md:items-center gap-y-8 px-[18px] pb-[144px]'>
            <Link href={APP_ROUTES.index}>
                <BrandLogo />
            </Link>

            <Card className="bg-white w-full lg:w-[438px] h-fit lg:h-[542px] flex flex-col gap-y-6 p-6 rounded-[8px] card-shadow border-none">
                <CardHeader className="h-[86px] border-b space-y-1 pb-4">
                    <CardTitle className="text-base font-bold font-sen">Account Type</CardTitle>
                    <CardDescription className="text-sm text-[hsla(215,16%,47%,1)]">Select an account type that best describes you and how you intend to use Chainkeeping.</CardDescription>
                </CardHeader>
                <CardContent className="w-full h-full flex flex-col gap-y-6 !mt-0">
                    <AccountTypeToggleGroup accountType={accountType} setAccountType={setAccountType} />

                    <Button
                        size="lg"
                        disabled={!accountType}
                        onClick={handleContinue}
                        className="w-full text-base font-medium"
                    >
                        Continue
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default AccountTypeSelectorTemp