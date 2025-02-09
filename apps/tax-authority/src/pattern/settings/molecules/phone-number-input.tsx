import React, { FC } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller, useFormContext } from "react-hook-form";
import { ICustomInputProps } from "@/pattern/types";
import { cn } from "@chainkeeping/ui";

const PhoneNumberInput: FC<ICustomInputProps> = ({ name, disabled }) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name!}
			control={control}
			render={({ field: { value, name, onChange } }) => (
				<PhoneInput
					disabled={disabled}
					country={"ng"}
					value={value}
					onChange={onChange}
					enableSearch={true}
					disableSearchIcon
					inputProps={{ name: `${name}` }}
					containerClass={cn(
						"h-[48px] h-full w-full flex items-center font-medium font-dmsans !py-0 !px-0 border border-[hsla(213,27%,84%,1)] rounded-[6px] transition-colors",
						"hover:!border-secondary focus:!outline-none focus:!border-secondary focus-within:!border-secondary focus:!ring-[hsla(0,69%,51%,0.25)] focus:!ring-[3px] focus-within:!ring-[hsla(0,69%,51%,0.25)] focus-within:!ring-[3px] rounded-[6px]",
						"disabled:cursor-not-allowed disabled:bg-border disabled:border-border"
					)}
					inputClass='min-w-full w-full min-h-[48px] h-full bg-transparent appearance-none font-[500] !font-dmsans !text-base !text-foreground py-[16px] ml-[8px] placeholder:text-sm !border-none !outline-none'
					buttonClass='!bg-accent !w-[45px] !appearance-none !font-dmsans !text-[1.125rem] px-[8px] !border-none hover:!bg-accent focus:!bg-accent !outline-y-none !outline-l-none !rounded-l-[6px] hover:!rounded-l-[6px] !shadow-none'
					searchClass='placeholder:!font-dmsans'
					dropdownClass='custom_scollbar appearance-none !bg-white !max-w-[250px] !font-dmsans !text-sm !rounded-[6px] !shadow-md card-shadow'
				/>
			)}
		/>
	);
};

export default PhoneNumberInput;
