export interface IFormatCurrencyProps {
    amount: string;
    mantissa?: number;
    currency?: string;
}
export interface IFormatNumberProps {
    number: number;
    mantissa?: number; // e.g 1.1 or 1.12
    average?: boolean; // formats 1000 to 1k
}
export interface IFormatDollarAmountProps {
    amount: number;
}

export interface IFaqs {
    question: string;
    answer: string;
}