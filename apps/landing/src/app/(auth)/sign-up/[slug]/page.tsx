'use client'

import { CompanySignupTemp } from '@/pattern/auth/templates/company-signup-temp'
import { useParams } from 'next/navigation'
import { IndividualSignupTemp } from '@/pattern/auth/templates/individual-signup-temp'

const CompanySignUpPage = () => {
    const params = useParams<{ slug: "" | "personal" | "company" | "practitioners" }>()

    const getSignupPersona = () => {
        switch (params.slug.toLocaleLowerCase()) {
            case "personal":
                return (
                    <IndividualSignupTemp />
                );
            case "company":
                return (
                    <CompanySignupTemp />
                );
            case "practitioners":
                return (
                    <CompanySignupTemp />
                );
            default:
                return (
                    <IndividualSignupTemp />
                );
        }
    };

    return (
        <>
            {getSignupPersona()}
        </>
    )
}

export default CompanySignUpPage