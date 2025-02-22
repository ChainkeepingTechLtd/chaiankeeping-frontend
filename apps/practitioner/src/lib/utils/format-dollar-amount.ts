import numbro from "numbro";
import { IFormatDollarAmountProps } from "../types";

/**
 * @description Formats amount with dollar symbol using numbro
 * @param {string|number} amount - amount to format
 * @example
 * Formats 1000000000 to "$1B"
 * Formats 2000000 to "$2M"
 * @returns string
 */
export const formatDollarAmount = ({
    amount
}: IFormatDollarAmountProps): string => {
    const formattedAmount = numbro(amount).formatCurrency({
        average: true,
        mantissa: 2,
        optionalMantissa: true,
        currencySymbol: '$',
        currencyPosition: 'prefix'
    });

    return formattedAmount;
};


// export const formatCurrencyAmount = ({
//     amount,
//     mantissa = 0,
//     currency = "NGN"
// }: IFormatCurrencyProps): string => {

//     const amountFloat = parseFloat(amount)
//     const formattedAmount = new Intl.NumberFormat('en-IN', {
//         style: 'currency',
//         currency: currency,
//         maximumSignificantDigits: 5,
//         maximumFractionDigits: mantissa
//     }).format(amountFloat)

//     return formattedAmount;
// }