import { FC } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { Hidden } from "../hidden";
import { LoadingSpinner } from "@/components/icons/loading-spinner";

interface ISubmitButtonprops extends ButtonProps {
	loading?: boolean;
}

const SubmitButton: FC<ISubmitButtonprops> = ({
	loading = false,
	children,
	...props
}) => {
	return (
		<Button {...props} type='submit'>
			<Hidden isVisible={loading}>
				<LoadingSpinner className='animate-spin' />
			</Hidden>
			<Hidden isVisible={!loading}>{children}</Hidden>
		</Button>
	);
};

export { SubmitButton };
