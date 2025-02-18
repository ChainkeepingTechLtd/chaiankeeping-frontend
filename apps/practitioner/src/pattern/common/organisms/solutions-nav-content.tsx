import React from 'react'
import NavListItem from '../molecules/nav-list-item'
import CryptoTaxComputationIcon from '../atoms/nav-icons/crypto-tax-computation-icon'
import ForAccountingPractitionersIcon from '../atoms/nav-icons/for-accounting-practitioners-icon'
import CryptoPayrollIcon from '../atoms/nav-icons/crypto-payroll-icon'
import CryptoPaymentsIcon from '../atoms/nav-icons/crypto-payments-icon'
import CryptoInvoicingIcon from '../atoms/nav-icons/crypto-invoicing-icon'
import CryptoFinancialReportingIcon from '../atoms/nav-icons/crypto-financial-reporting-icon'
import { SOLUTIONS_ROUTES } from '@/lib/routes'

const SolutionsNavContent = () => {
  return (
    <div className='bg-white lg:w-[1100px] h-[280px] flex items-center justify-center p-9 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 transition-all'>
      <ul className='bg-inherit w-full h-full grid grid-cols-3 gap-12 mx-auto'>
        <li className='w-full flex flex-col items-center gap-y-9'>
          {/* Crypto tax computation */}
          <NavListItem icon={<CryptoTaxComputationIcon />} href={SOLUTIONS_ROUTES.computation} title='Crypto tax computation' description='Computation, filing, optimization and consultation' />

          {/* For accounting practitioners */}
          <NavListItem icon={<ForAccountingPractitionersIcon />} href={SOLUTIONS_ROUTES.accountingPractitioners} title='For accounting practitioners' description='Enable your clients stay compliant with crypto tax regulations.' />
        </li>

        <li className='w-full flex flex-col items-center gap-y-9'>
          {/* Crypto payroll */}
          <NavListItem icon={<CryptoPayrollIcon />} href={ SOLUTIONS_ROUTES.payroll} title='Crypto payroll' description='Employee records, PAYE, Pension figure, NHIS, NHF, Life insurance.' />

          {/* Crypto payments */}
          <NavListItem icon={<CryptoPaymentsIcon />} href={SOLUTIONS_ROUTES.payments} title='Crypto payments' description='Pay vendors, Bills, Bulk and Single payments.' />
        </li>

        <li className='w-full flex flex-col items-center gap-y-9'>
          {/* Crypto invoicing */}
          <NavListItem icon={<CryptoInvoicingIcon />} href={SOLUTIONS_ROUTES.invoicing} title='Crypto invoicing' description='Bill customers with Sales invoice and record purchases' />

          {/* Crypto financial reporting */}
          <NavListItem icon={<CryptoFinancialReportingIcon />} href={SOLUTIONS_ROUTES.financialReporting} title='Crypto financial reporting' description='Integration with accounting softwares for proper reporting, consulting.' />
        </li>
      </ul>
    </div>
  )
}

export default SolutionsNavContent