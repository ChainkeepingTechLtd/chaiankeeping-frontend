import React from "react";

interface AccountActionIconProps {
	className?: string; // `className` is optional and of type string
}

const AccountQuickActionIcon: React.FC<AccountActionIconProps> = ({
	className,
}) => {
	return (
		<svg
			width='44'
			height='44'
			viewBox='0 0 44 44'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<rect width='44' height='44' rx='22' fill='#F5F8FA' />
			<path
				d='M22 12C19.38 12 17.25 14.13 17.25 16.75C17.25 19.32 19.26 21.4 21.88 21.49C21.96 21.48 22.04 21.48 22.1 21.49C22.12 21.49 22.13 21.49 22.15 21.49C22.16 21.49 22.16 21.49 22.17 21.49C24.73 21.4 26.74 19.32 26.75 16.75C26.75 14.13 24.62 12 22 12Z'
				fill='#384860'
			/>
			<path
				d='M27.08 24.1528C24.29 22.2928 19.74 22.2928 16.93 24.1528C15.66 25.0028 14.96 26.1528 14.96 27.3828C14.96 28.6128 15.66 29.7528 16.92 30.5928C18.32 31.5328 20.16 32.0028 22 32.0028C23.84 32.0028 25.68 31.5328 27.08 30.5928C28.34 29.7428 29.04 28.6028 29.04 27.3628C29.03 26.1328 28.34 24.9928 27.08 24.1528Z'
				fill='#384860'
			/>
		</svg>
	);
};

export default AccountQuickActionIcon;
