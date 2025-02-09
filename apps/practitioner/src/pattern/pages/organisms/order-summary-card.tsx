import OrderSummary from "../molecules/order-summary";
import SelectPayment from "../molecules/select-payment";

const OrderSummaryCard = () => {
	return (
		<div className='w-full lg:min-h-[400px] h-fit space-y-[32px] lg:space-y-[10px]'>
			<div className=' space-y-[32px]'>
				<div className=' h-full flex  gap-10'>
					<OrderSummary />

					<SelectPayment />
				</div>
			</div>
		</div>
	);
};

export default OrderSummaryCard;
