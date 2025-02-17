'use client'

import { CompanySignupTemp } from '@/pattern/auth/templates/company-signup-temp'
import { IndividualSignupTemp } from '@/pattern/auth/templates/individual-signup-temp'
import { PractitionersSignupTemp } from '@/pattern/auth/templates/practitioners-signup-temp'
import { useParams } from 'next/navigation'

const SignUpPage = () => {
    const params = useParams<{ slug: "" | "personal" | "company" | "practitioners" }>()

    const renderSignupPersona = () => {
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
                    <PractitionersSignupTemp />
                );
            default:
                return (
                    <IndividualSignupTemp />
                );
        }
    };

    return (
        <>
            {renderSignupPersona()}
        </>
    )
}

export default SignUpPage