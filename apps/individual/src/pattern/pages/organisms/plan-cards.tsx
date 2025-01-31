import { FC, ReactNode } from "react";
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Hidden,
} from "@chainkeeping/ui";
import { APP_ROUTES } from "@/lib/routes";
import { useRouter } from "next/navigation";

interface IPlanCardProps {
	title: string;
	pack: string;
	amount: string;
	pecks: ReactNode;
	customized?: boolean;
	current?: boolean;
}

const PlanCard: FC<IPlanCardProps> = ({
	amount,
	pack,
	pecks,
	title,
	customized = false,
	current = false,
}) => {
	const { push } = useRouter();
	const router = useRouter();

	const handleOrder = () => {
		router.push("plans/order-summary");
	};

	return (
		<Card className='w-full max-w-[368px] lg:min-w-[320px] lg:max-w-full h-fit lg:h-[395px] flex flex-col items-center gap-y-2 p-6 rounded-[8px] card-shadow'>
			<CardHeader className='w-full flex flex-col gap-y-[20px] text-center'>
				<h3 className='w-full h-fit text-gray-700 text-center text-xl font-rubik font-bold'>
					{title}
				</h3>
				<div className='relative w-full h-[48px] flex items-center !mt-0'>
					<div className='absolute top-1/2 translate-y-[-50%] left-[50%] translate-x-[-50%] bg-white h-[32px] min-w-[85.88px] w-fit flex items-center justify-center font-dmsans text-sm whitespace-nowrap py-1 px-2 border rounded-full'>
						{pack}
					</div>
					<div className='w-full border-[1px]'></div>
				</div>
			</CardHeader>
			<CardContent className='w-full space-y-6 !mt-0'>
				<div className='text-center space-y-2'>
					<div className='flex items-baseline justify-center gap-0.5'>
						<span className='text-sm font-dmsans text-[hsla(215,20%,65%,1)]'>
							USD
						</span>
						<span className='text-5xl font-bold'>{amount}</span>
						<Hidden isVisible={!customized}>
							<span className='text-lg text-[hsla(215,20%,65%,1)]'>.00</span>
						</Hidden>
					</div>
					<p className='text-sm text-[hsla(215,20%,65%,1)] font-dmsans'>
						Per Assessment Year
					</p>
				</div>
				<Button
					variant={current ? "secondary" : customized ? "default" : "secondary"}
					size='lg'
					disabled={current}
					onClick={handleOrder}
					className='w-full text-base font-medium'
				>
					{current ? "Current Plan" : "Get started"}
				</Button>
				{pecks}
			</CardContent>
		</Card>
	);
};

export default PlanCard;
