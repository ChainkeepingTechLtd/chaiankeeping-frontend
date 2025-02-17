'use client'

import { CompanySignupTemp } from '@/pattern/auth/templates/company-signup-temp'
import { useParams, useSearchParams } from 'next/navigation'

const CompanySignUpPage = () => {
    const searchParams = useSearchParams()
    const params = useParams<{ slug: "" | "personal" | "company" | "practitioners" }>

    const isAdditionalInfo = searchParams.get('additional-info')

    return (
        <>
            {/* <Hidden isVisible={!isAdditionalInfo} >
                <CreateAccountTemp />
            </Hidden>
            <Hidden isVisible={!!isAdditionalInfo} >
                <SignUpInformationTemp />
            </Hidden> */}
            <CompanySignupTemp />
        </>
    )
}

export default CompanySignUpPage