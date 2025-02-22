import { SECONDARY_HEX_COLOUR } from "@/lib/constants";
import { IInputIconProps } from "./types";

const EmailInputIcon = ({ focus }: IInputIconProps) => {
    return (
        <>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.75 0.625H4.25C2 0.625 0.5 1.75 0.5 4.375V9.625C0.5 12.25 2 13.375 4.25 13.375H11.75C14 13.375 15.5 12.25 15.5 9.625V4.375C15.5 1.75 14 0.625 11.75 0.625ZM12.1025 5.1925L9.755 7.0675C9.26 7.465 8.63 7.66 8 7.66C7.37 7.66 6.7325 7.465 6.245 7.0675L3.8975 5.1925C3.6575 4.9975 3.62 4.6375 3.8075 4.3975C4.0025 4.1575 4.355 4.1125 4.595 4.3075L6.9425 6.1825C7.5125 6.64 8.48 6.64 9.05 6.1825L11.3975 4.3075C11.6375 4.1125 11.9975 4.15 12.185 4.3975C12.38 4.6375 12.3425 4.9975 12.1025 5.1925Z" fill={focus ? SECONDARY_HEX_COLOUR : "#94A3B8"} />
            </svg>

        </>
    );
};

export { EmailInputIcon };
