import React from "react";
import TetherIcon from "../atoms/tether-icon";
import UsdcIcon from "../atoms/usdc-icon";
import EthIcon from "../atoms/eth-icon";
import BtcIcon from "../atoms/btc-icon";
import MaticIcon from "../atoms/matic-icon";

const PortfolioTable = () => {
	const portfolioData = [
		{
			asset: "USDT",
			balance: "21,230.0768",
			value: "16,450,120.78",
			icon: <TetherIcon />,
		},
		{
			asset: "USDC",
			balance: "7,365.67",
			value: "5,450,608.04",
			icon: <UsdcIcon />,
		},
		{
			asset: "MATIC",
			balance: "2,678.9860",
			value: "4,745,432.56",
			icon: <MaticIcon />,
		},
		{
			asset: "ETH",
			balance: "2.382",
			value: "4,450,450.00",
			icon: <EthIcon />,
		},
		{
			asset: "BTC",
			balance: "0.0670943",
			value: "4,089,323.45",
			icon: <BtcIcon />,
		},
	];

	return (
		<div className='w-full flex items-center flex-col '>
			<table className='table-auto w-full text-left bg-[#F8F9FA] rounded-lg '>
				<thead>
					<tr className='text-sm text-[#202B3C] '>
						<th className='p-4'>Asset</th>
						<th className='p-4 text-end'>Balance</th>
						<th className='p-4'>
							Value <span className='text-grey-300'>(NGN)</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{portfolioData.map((item, index) => (
						<tr key={index} className='text-sm text-[#202B3C] '>
							<td className='p-4 flex items-center gap-3'>
								{item.icon}
								<span className='font-medium'>{item.asset}</span>
							</td>
							<td className='p-4 text-end'>{item.balance}</td>
							<td className='p-4 text-right'>
								<span className='font-bold'>{item.value.split(".")[0]}</span>
								<span className='text-grey-300 text-[10px]'>
									.{item.value.split(".")[1]}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PortfolioTable;
