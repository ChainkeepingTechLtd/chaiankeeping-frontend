import { FC, useState } from "react";
import { ICustomInputProps } from "@/pattern/types";
import { cn, Input } from "@chainkeeping/ui";

import { Controller, useFormContext } from "react-hook-form";
import PasswordInputLockIcon from "../atoms/password-input-lock-icon";
import PasswordToggleIcon from "../atoms/password-toggle-icon";

const PasswordInput: FC<ICustomInputProps> = ({
	name,
	error,
	value,
	onChange,
	className,
	placeholder,
	...props
}) => {
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const [toggle, setToggle] = useState<boolean>(true);
	const { control } = useFormContext();

	return (
		<Controller
			name={name!}
			control={control}
			render={({ field: { value, name, onChange, disabled } }) => (
				<div className='w-full space-y-[4px]'>
					<div className='relative w-full'>
						<Input
							name={name}
							value={value}
							type={toggle ? "password" : "text"}
							onChange={onChange}
							onFocus={() => setIsFocus(true)}
							onBlur={() => setIsFocus(false)}
							disabled={disabled}
							variant={error ? "error" : "default"}
							placeholder={placeholder ?? "Enter password"}
							className={cn(className, "pl-[34px] pr-[40px]")}
							{...props}
						/>
						{/* prefix Icon */}
						<span className='absolute top-1/2 -translate-y-1/2 left-[12px]'>
							<PasswordInputLockIcon focus={error ? false : isFocus} />
						</span>

						{/* Suffix Icon */}
						<span
							className='absolute top-1/2 -translate-y-1/2 right-[12px]'
							onClick={() => setToggle(!toggle)}
						>
							<PasswordToggleIcon toggle={toggle} />
						</span>
					</div>
				</div>
			)}
		/>
	);
};

export default PasswordInput;
