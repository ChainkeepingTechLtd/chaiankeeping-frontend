import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, Form, Button } from '@chainkeeping/ui'
import { ChevronLeft } from 'lucide-react'
import { CompanySignupFormData, loginInfoSchema } from '@/pattern/schema/auth-schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import InfoWidget from '@/pattern/resources/molecules/info-widget'
import { BlueInfoIcon } from '@/pattern/resources/atoms/blue-info-icon'

type IProps = {
    onSubmit: (data: Partial<CompanySignupFormData>) => void
    // defaultValues: Partial<LoginFormData>
    onBack: () => void
}

const PractitionersCompetenceTestNotificationWidget = ({ onSubmit, onBack }: IProps) => {
    const form = useForm()

    return (
        <Card className="bg-white w-full max-w-[438px] lg:max-w-[564px] h-fit flex flex-col gap-y-6 p-6 rounded-[8px] shadow-md border-none">
            <CardHeader className="w-full h-fit lg:h-[30px] flex flex-row items-center justify-between pb-2 border-b">
                <CardTitle className="flex items-center text-base font-bold font-sen">
                    <span className="mr-[8px] cursor-pointer" onClick={onBack}>
                        <ChevronLeft className="text-secondary" />
                    </span>
                    Welcome to Chainkeeping
                </CardTitle>
            </CardHeader>
            <CardContent className="w-full h-full flex flex-col gap-y-6 !mt-0">
                <InfoWidget Icon={<BlueInfoIcon />} info="At the end of your registration process as a Practitioner, you will be required to take an Assessment test of 50 questions to test your Knowledge of Blockchain and Cryptocurrency Accounting." className='bg-[hsla(214,84%,56%,0.1)] h-fit lg:h-[84px] text-sm lg:!text-sm font-normal font-dmsans border-l-0 rounded-[8px]' />

                <div className="space-y-4">
                    <h2 className="text-base text-[hsla(216,30%,18%,1)] font-dmsans font-bold">Why test?</h2>
                    <p className="text-base text-[hsla(216,30%,18%,1)] leading-6 font-dmsans">
                        The test is designed to ensure that Practitioners possess the necessary expertise to effectively manage their
                        crypto clients' financial reporting and tax obligations.
                    </p>
                </div>

                <div className="space-y-4">
                    <p className="text-base text-[hsla(216,30%,18%,1)] leading-6 font-dmsans">You have 2 attempts at the assessment test with a Pass mark above 80%.</p>
                    <p className="text-base text-[hsla(216,30%,18%,1)] leading-6 font-dmsans">
                        Should you fail, you will be required to take the Convexity Blockchain and Cryptocurrency for Accountants
                        Training (CBCAT) at a cost of $500.00.
                    </p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                        <Button type="submit" className="w-full">Continue to sign up</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default PractitionersCompetenceTestNotificationWidget