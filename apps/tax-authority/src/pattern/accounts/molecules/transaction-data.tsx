import BinanceIcon from "@/pattern/common/atoms/crypto-platforms/binance-icon";
import TetherIcon from "@/pattern/clients/atoms/tether-icon";
import FanthomIcon from "@/pattern/clients/atoms/fanthom-icon";
import ArrowDownIcon from "@/pattern/clients/atoms/arrow-down";
import BTCIcon from "@/pattern/clients/atoms/btc-icon";
import ArrowUp from "@/pattern/clients/atoms/arrow-up";
import LinkIcon from "@/pattern/clients/atoms/link-icon";
import WalletIcon from "@/pattern/clients/atoms/wallet-icon";
import KucionIcon from "@/pattern/clients/atoms/kucion-icon";
import XtzIcon from "@/pattern/clients/atoms/xtz-icon";
import FiatIcon from "@/pattern/clients/atoms/fiat-icon";
import AvalancheIcon from "@/pattern/clients/atoms/avalanche-icon";
import NairaIcon from "@/pattern/clients/atoms/naira-icon";
import ChzIcon from "@/pattern/clients/atoms/chz-icon";
import SwapIcon from "@/pattern/clients/atoms/swap-icon";
import MetamaskIcon from "@/pattern/clients/atoms/metamask-icon";
import UniIcon from "@/pattern/clients/atoms/uni-icon";
import PolsIcon from "@/pattern/clients/atoms/pols-icon";
import TradeIcon from "@/pattern/clients/atoms/trade-icon";

export const transactionData = [
	{
		dateTime: {
			date: "Feb 16, 2023 ",
			time: "04:29 PM",
		},

		label: {
			title: "Trade",
			icon: <TradeIcon />,
		},
		account: "Binance",
		accountIcon: <BinanceIcon />,
		outFrom: {
			amount: "-300.087 USDT",
			details: "NGN 223,700.00 - Cost basis",
			icon: <TetherIcon />,
		},
		inTo: {
			amount: "+664.0562 FTM",
			details: "≈ NGN 224,050.00",
			icon: <FanthomIcon />,
		},
		fees: "0.06 USDT",
		profitLoss: "NGN 350.00",
	},

	{
		dateTime: {
			date: "Feb 16, 2023 ",
			time: "04:29 PM",
		},

		label: {
			title: "Deposit",
			icon: <ArrowDownIcon />,
		},
		account: "Binance",
		accountIcon: <BinanceIcon />,
		outFrom: {
			amount: "",
			details: "",
			icon: "",
		},
		inTo: {
			amount: "+664.0562 BTC",
			details: "≈ NGN 224,050.00",
			icon: <BTCIcon />,
		},
		fees: "0.06 BUSD",
		profitLoss: "- NGN 15.00",
	},
	{
		dateTime: {
			date: "Feb 06, 2023 ",
			time: "04:29 PM",
		},

		label: {
			title: "Withdrawal",
			icon: <ArrowUp />,
		},
		account: "Binance",
		accountIcon: <BinanceIcon />,
		outFrom: {
			amount: "-105.956 LINK",
			details: "NGN 90,160.50 - Cost Basis",
			icon: <LinkIcon />,
		},
		inTo: {
			amount: "",
			details: "0x2c9b...fa23bc093ae",
			icon: <WalletIcon />,
		},
		fees: "1.00 USDT",
		profitLoss: "",
	},
	{
		dateTime: {
			date: "Feb 06, 2023 ",
			time: "12:20 PM",
		},

		label: {
			title: "Trade",
			icon: <TradeIcon />,
		},
		account: "Binance",
		accountIcon: <BinanceIcon />,
		outFrom: {
			amount: "-105.956 MATIC",
			details: "NGN 90,160.50 - Cost Basis",
			icon: <span>Matic Icon here</span>,
		},
		inTo: {
			amount: "+121.80976 BUSD",
			details: "≈ NGN 90,145.50",
			icon: <span>BUSD icon here</span>,
		},
		fees: "1.06 USDT",
		profitLoss: "",
	},
	{
		dateTime: {
			date: "Feb 06, 2023 ",
			time: "12:20 PM",
		},

		label: {
			title: "Airdrop",
			icon: <ArrowDownIcon />,
		},
		account: "Kucion",
		accountIcon: <KucionIcon />,
		outFrom: {
			amount: "",
			details: "",
			icon: "",
		},
		inTo: {
			amount: "+24.8 XTZ",
			details: "≈ NGN 20,860.00",
			icon: <XtzIcon />,
		},
		fees: "1.06 KCS",
		profitLoss: "NGN 20,860.00",
	},
	{
		dateTime: {
			date: "Jan 31, 2023 ",
			time: "07:20 AM",
		},

		label: {
			title: "Fiat Buy",
			icon: <FiatIcon />,
		},
		account: "Avalanche",
		accountIcon: <AvalancheIcon />,
		outFrom: {
			amount: "-3,456.56 USDC",
			details: "NGN 2,574,720.00 - Cost basis",
			icon: <span>USDC icon here</span>,
		},
		inTo: {
			amount: "+2,574,720.00 NGN",
			details: "≈ NGN 2,573,020.00",
			icon: <NairaIcon />,
		},
		fees: "-",
		profitLoss: "- NGN 15.00",
	},
	{
		dateTime: {
			date: "Jan 31, 2023 ",
			time: "07:20 AM",
		},

		label: {
			title: "Fiat Sell",
			icon: <FiatIcon />,
		},
		account: "Binance",
		accountIcon: <BinanceIcon />,
		outFrom: {
			amount: "-105,956.00 NGN",
			details: "NGN 90,160.50 - Cost basis",
			icon: <NairaIcon />,
		},
		inTo: {
			amount: "+142.222 USDT",
			details: "≈ NGN 90,560.50",
			icon: <TetherIcon />,
		},
		fees: "-",
		profitLoss: "- NGN 1,715.00",
	},
	{
		dateTime: {
			date: "Jan 31, 2023 ",
			time: "07:20 AM",
		},

		label: {
			title: "Investment Loss",
			icon: <ArrowUp />,
		},
		account: "Avalance",
		accountIcon: <AvalancheIcon />,
		outFrom: {
			amount: "",
			details: "",
			icon: "",
		},
		inTo: {
			amount: "+142.222 USDT",
			details: "≈ NGN 90,560.50",
			icon: <ChzIcon />,
		},
		fees: "1.06 USDT",
		profitLoss: "NGN 54,889.36",
	},
	{
		dateTime: {
			date: "Jan 31, 2023 ",
			time: "07:20 AM",
		},

		label: {
			title: "Swap",
			icon: <SwapIcon />,
		},
		account: "Metamask",
		accountIcon: <MetamaskIcon />,
		outFrom: {
			amount: "-156.56 UNI",
			details: "NGN 734,832.50 - Cost basis",
			icon: <UniIcon />,
		},
		inTo: {
			amount: "+599.098 POLS",
			details: "≈ NGN 733,832.50",
			icon: <PolsIcon />,
		},
		fees: "1.06 UNI",
		profitLoss: "NGN 54,889.36",
	},
	{
		dateTime: {
			date: "Jan 31, 2023 ",
			time: "07:20 AM",
		},

		label: {
			title: "Donation",
			icon: <ArrowDownIcon />,
		},
		account: "Trust Wallet",
		accountIcon: <span>Trust wallet Icon here</span>,
		outFrom: {
			amount: "",
			details: "0x2c9b...fa23bc093ae3b282c0",
			icon: <WalletIcon />,
		},
		inTo: {
			amount: "+10 ETH",
			details: "≈ NGN 14,192,250.50",
			icon: <span>ETH icon here</span>,
		},
		fees: "0.0006 ETH",
		profitLoss: "NGN 14,192,250.50",
	},
	{
		dateTime: {
			date: "Jan 31, 2023 ",
			time: "07:20 AM",
		},

		label: {
			title: "Fiat Sell",
			icon: <FiatIcon />,
		},
		account: "Binance",
		accountIcon: <BinanceIcon />,
		outFrom: {
			amount: "-105,956.00 NGN",
			details: "NGN 90,160.50 - Cost basis",
			icon: <NairaIcon />,
		},
		inTo: {
			amount: "+142.222 USDT",
			details: "≈ NGN 90,560.50",
			icon: <TetherIcon />,
		},
		fees: "-",
		profitLoss: "- NGN 1,715.00",
	},
	{
		dateTime: {
			date: "Jan 31, 2023 ",
			time: "07:20 AM",
		},

		label: {
			title: "Investment Loss",
			icon: <ArrowUp />,
		},
		account: "Avalance",
		accountIcon: <AvalancheIcon />,
		outFrom: {
			amount: "",
			details: "",
			icon: "",
		},
		inTo: {
			amount: "+142.222 USDT",
			details: "≈ NGN 90,560.50",
			icon: <ChzIcon />,
		},
		fees: "1.06 USDT",
		profitLoss: "NGN 54,889.36",
	},
	{
		dateTime: {
			date: "Jan 31, 2023 ",
			time: "07:20 AM",
		},

		label: {
			title: "Swap",
			icon: <SwapIcon />,
		},
		account: "Metamask",
		accountIcon: <MetamaskIcon />,
		outFrom: {
			amount: "-156.56 UNI",
			details: "NGN 734,832.50 - Cost basis",
			icon: <UniIcon />,
		},
		inTo: {
			amount: "+599.098 POLS",
			details: "≈ NGN 733,832.50",
			icon: <PolsIcon />,
		},
		fees: "1.06 UNI",
		profitLoss: "NGN 54,889.36",
	},
	{
		dateTime: {
			date: "Jan 31, 2023 ",
			time: "07:20 AM",
		},

		label: {
			title: "Donation",
			icon: <ArrowDownIcon />,
		},
		account: "Trust Wallet",
		accountIcon: <span>Trust wallet Icon here</span>,
		outFrom: {
			amount: "",
			details: "0x2c9b...fa23bc093ae3b282c0",
			icon: <WalletIcon />,
		},
		inTo: {
			amount: "+10 ETH",
			details: "≈ NGN 14,192,250.50",
			icon: <span>ETH Icon here</span>,
		},
		fees: "0.0006 ETH",
		profitLoss: "NGN 14,192,250.50",
	},
];

export const exchangeData = [];
