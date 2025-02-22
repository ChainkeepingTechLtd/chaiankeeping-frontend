import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { cn, ToggleGroup } from "@chainkeeping/ui";
import AccountTypeToggle, {
	IAccountTypeToggleProps,
} from "../molecules/account-type-toggle";
import { PersonalAccountTypeIcon } from "../atoms/personal-account-type-icon";
import CompanyAccountTypeIcon from "../atoms/company-account-type-icon";
import PractitionersAccountTypeIcon from "../atoms/practitioners-account-type-icon";
import { GRAY_60_HEX_COLOUR, SECONDARY_HEX_COLOUR } from "@/lib/constants";

const AccountType: Omit<IAccountTypeToggleProps, "toggleGroupValue">[] = [
	{
		title: "Personal",
		description: "I am an individual looking to manage my crypto taxes.",
		Icon: PersonalAccountTypeIcon,
		value: "personal",
	},
	{
		title: "Company",
		description: "We are a business looking to manage our crypto taxes.",
		Icon: CompanyAccountTypeIcon,
		value: "company",
	},
	{
		title: "Practitioners",
		description:
			"We are a business looking to provide crypto related services to individuals & businesses.",
		Icon: PractitionersAccountTypeIcon,
		value: "practitioners",
	},
];

interface IProps {
	accountType: string;
	setAccountType: Dispatch<
		SetStateAction<"" | "personal" | "company" | "practitioners">
	>;
}

const AccountTypeToggleGroup: FC<IProps> = ({
	accountType,
	setAccountType,
}) => {
	return (
		<div>
			<ToggleGroup
				type='single'
				orientation='vertical'
				value={accountType}
				onValueChange={(value: "" | "personal" | "company" | "practitioners") =>
					setAccountType(value)
				}
				className='w-full max-w-[390px] h-full flex flex-col items-start gap-y-3'
			>
				{AccountType?.map(({ value, description, Icon, title }, idx) => (
					<AccountTypeToggle
						key={idx}
						title={title}
						description={description}
						value={value}
						toggleGroupValue={accountType}
						Icon={
							<Icon
								width='40'
								height='40'
								color={
									accountType === value
										? SECONDARY_HEX_COLOUR
										: GRAY_60_HEX_COLOUR
								}
								className={cn(
									accountType === value ? "bg-[#FAE5E5]" : "bg-accent"
								)}
							/>
						}
					/>
				))}
			</ToggleGroup>
		</div>
	);
};

export default AccountTypeToggleGroup;
