import Link from "next/link";
import { usePathname } from "next/navigation";

import {
	AvalancheAccount,
	BinanceAccount,
	BitmexAccount,
	CoinBaseAccount,
	FanthomAccount,
	GeminiAccount,
	KucionAccount,
	LedgerAccount,
	MetamaskAccount,
	OptimismAccount,
	TrustwalletAccount,
} from "./icons";
import SelectedIcon from "../atoms/selected-icon";
import { IoMdAdd } from "react-icons/io";
import { cn } from "@chainkeeping/ui";

const links = [
	{ name: "Binance", href: "/accounts", icon: BinanceAccount },
	{ name: "Metamask", href: "/accounts/metamask", icon: MetamaskAccount },
	{
		name: "Avalanche C-Chain",
		href: "/accounts/avalanche",
		icon: AvalancheAccount,
	},
	{ name: "CoinBase", href: "/accounts/coinbase", icon: CoinBaseAccount },
	{
		name: "Trust Wallet",
		href: "/accounts/trust-wallet",
		icon: TrustwalletAccount,
	},
	{ name: "Trust Wallet 2", href: "/trust-wallet-2", icon: TrustwalletAccount },
	{ name: "Fantom", href: "/accounts/fantom", icon: FanthomAccount },
	{ name: "Kucoin", href: "/accounts/kucoin", icon: KucionAccount },
	{ name: "Ledger", href: "/accounts/ledger", icon: LedgerAccount },
	{ name: "Optimism", href: "/accounts/optimism", icon: OptimismAccount },
	{ name: "Gemini", href: "/accounts/gemini", icon: GeminiAccount },
	{ name: "Bitmex", href: "/accounts/bitmex", icon: BitmexAccount },
];

export function Links() {
	const pathname = usePathname();

	return (
		<div className='flex h-full flex-row border-black  lg:flex-col'>
			{links.map((link) => {
				const isActive = pathname === link.href; // Check if the link is active
				const LinkIcon = link.icon;

				return (
					<div key={link.name} className='w-full flex flex-col'>
						<Link href={link.href}>
							{isActive ? (
								""
							) : (
								<div className='px-2'>
									<div className='border-b'></div>
								</div>
							)}

							<div
								className={cn(
									"flex w-full justify-between items-center gap-2 px-6 py-5 border-l-[3px] transition-colors",
									isActive
										? "border-[#D82E2E] bg-[#FEFAFA]"
										: "border-transparent text-black"
								)}
							>
								<div className='flex gap-2 items-center'>
									<LinkIcon />
									<p className=''>{link.name}</p>
								</div>
								{isActive ? <SelectedIcon /> : null}
							</div>
						</Link>
						{isActive && (
							<div className='py-2 cursor-pointer px-10 flex text-center w-full items-center gap-3 group'>
								<div className='p-1 text-grey-500 bg-[#F5F8FA] rounded transition-all ease-in-out duration-300 group-hover:bg-[#FDF3F3] group-hover:text-[#D82E2E]'>
									<IoMdAdd />
								</div>
								<p className='text-center'>Add Account</p>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}
