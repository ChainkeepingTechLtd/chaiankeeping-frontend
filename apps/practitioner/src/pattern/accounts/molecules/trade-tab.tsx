import React from "react";
import Modal from "./import-file-modal";
import {
	Button,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@chainkeeping/ui";
import SearchInput from "@/pattern/clients/molecules/search-input";
import BinanceIcon from "@/pattern/common/atoms/crypto-platforms/binance-icon";
import MetamaskAccountIcon from "../atoms/metamask-account-icon";
import AvalancheAccountIcon from "../atoms/avalanche-account-icon";
import CoinbaseAccountIcon from "../atoms/coinbase-account-icon";
import ImportTransactionIcon from "../atoms/import-transaction-icon";
import DocIcon from "../atoms/doc-icon";

const TradeTab = () => {
	return (
		<div className='flex flex-col gap-4 items-center'>
			<div className='grid border border-border p-4 rounded-md lg:grid-cols-3 w-full gap-4 items-center'>
				<div className='space-y-2 w-full '>
					<label htmlFor='exchange_name' className='text-sm'>
						Transaction date
					</label>
					<Input
						id='exchange_name'
						type='datetime-local'
						placeholder='[Exchange_Name]'
						className='flex w-full justify-between h-10'
					/>
				</div>
				<div className='space-y-2 w-full '>
					<label htmlFor='api_key' className='text-sm'>
						Account
					</label>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder='Account' />
						</SelectTrigger>

						<SelectContent>
							<SearchInput
								// value={search}
								// onChange={(e) => setSearch(e.target.value)}
								placeholder='Search...'
							/>
							<SelectItem value='all-transactions'>
								<div className='flex gap-2 items-center'>
									<BinanceIcon /> Binance
								</div>
							</SelectItem>
							<SelectItem value='trade'>
								<div className='flex gap-2 items-center'>
									<BinanceIcon /> Binance 2
								</div>
							</SelectItem>
							<SelectItem value='deposit'>
								<div className='flex gap-2 items-center'>
									<MetamaskAccountIcon /> Metamask
								</div>
							</SelectItem>
							<SelectItem value='withdrawal'>
								<div className='flex gap-2 items-center'>
									<AvalancheAccountIcon /> Avalancher C-Chain
								</div>
							</SelectItem>
							<SelectItem value='airdrop'>
								<div className='flex gap-2 items-center'>
									<CoinbaseAccountIcon /> Coinbase
								</div>
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className='space-y-2 w-full '>
					<label htmlFor='api_key' className='text-sm'>
						Transaction label
					</label>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder='Trade' />
						</SelectTrigger>

						<SelectContent>
							<SelectItem value='all-transactions'>Trade</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className='grid lg:grid-cols-3 w-full gap-4 items-center border border-border p-4 rounded-md'>
				<p className='font-bold'>Sold</p>
				<p className='font-bold'>Bought</p>
				<p className='font-bold'>
					Fee<span className='text-grey-400'>(Optional)</span>
				</p>

				<div className='space-y-2 w-full '>
					<label htmlFor='api_key' className='text-sm'>
						Asset
					</label>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder='-Select-' />
						</SelectTrigger>

						<SelectContent>
							<SearchInput
								// value={search}
								// onChange={(e) => setSearch(e.target.value)}
								placeholder='Search...'
							/>
							<SelectItem value='all-transactions'>
								<div className='flex gap-2 items-center'>
									<BinanceIcon /> Binance
								</div>
							</SelectItem>
							<SelectItem value='trade'>
								<div className='flex gap-2 items-center'>
									<BinanceIcon /> Binance 2
								</div>
							</SelectItem>
							<SelectItem value='deposit'>
								<div className='flex gap-2 items-center'>
									<MetamaskAccountIcon /> Metamask
								</div>
							</SelectItem>
							<SelectItem value='withdrawal'>
								<div className='flex gap-2 items-center'>
									<AvalancheAccountIcon /> Avalancher C-Chain
								</div>
							</SelectItem>
							<SelectItem value='airdrop'>
								<div className='flex gap-2 items-center'>
									<CoinbaseAccountIcon /> Coinbase
								</div>
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className='space-y-2 w-full '>
					<label htmlFor='api_key' className='text-sm'>
						Asset
					</label>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder='-Select-' />
						</SelectTrigger>

						<SelectContent>
							<SearchInput
								// value={search}
								// onChange={(e) => setSearch(e.target.value)}
								placeholder='Search...'
							/>
							<SelectItem value='all-transactions'>
								<div className='flex gap-2 items-center'>
									<BinanceIcon /> Binance
								</div>
							</SelectItem>
							<SelectItem value='trade'>
								<div className='flex gap-2 items-center'>
									<BinanceIcon /> Binance 2
								</div>
							</SelectItem>
							<SelectItem value='deposit'>
								<div className='flex gap-2 items-center'>
									<MetamaskAccountIcon /> Metamask
								</div>
							</SelectItem>
							<SelectItem value='withdrawal'>
								<div className='flex gap-2 items-center'>
									<AvalancheAccountIcon /> Avalancher C-Chain
								</div>
							</SelectItem>
							<SelectItem value='airdrop'>
								<div className='flex gap-2 items-center'>
									<CoinbaseAccountIcon /> Coinbase
								</div>
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className='space-y-2 w-full '>
					<label htmlFor='api_key' className='text-sm'>
						Asset
					</label>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder='-Select-' />
						</SelectTrigger>

						<SelectContent>
							<SearchInput
								// value={search}
								// onChange={(e) => setSearch(e.target.value)}
								placeholder='Search...'
							/>
							<SelectItem value='all-transactions'>
								<div className='flex gap-2 items-center'>
									<BinanceIcon /> Binance
								</div>
							</SelectItem>
							<SelectItem value='trade'>
								<div className='flex gap-2 items-center'>
									<BinanceIcon /> Binance 2
								</div>
							</SelectItem>
							<SelectItem value='deposit'>
								<div className='flex gap-2 items-center'>
									<MetamaskAccountIcon /> Metamask
								</div>
							</SelectItem>
							<SelectItem value='withdrawal'>
								<div className='flex gap-2 items-center'>
									<AvalancheAccountIcon /> Avalancher C-Chain
								</div>
							</SelectItem>
							<SelectItem value='airdrop'>
								<div className='flex gap-2 items-center'>
									<CoinbaseAccountIcon /> Coinbase
								</div>
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className='space-y-2 w-full '>
					<label htmlFor='amount' className='text-sm'>
						Amount
					</label>
					<Input
						id='amount'
						type='text'
						placeholder='0.00'
						className='flex w-full justify-between h-10'
					/>
				</div>
				<div className='space-y-2 w-full '>
					<label htmlFor='amount' className='text-sm'>
						Amount
					</label>
					<Input
						id='amount'
						type='text'
						placeholder='0.00'
						className='flex w-full justify-between h-10'
					/>
				</div>
				<div className='space-y-2 w-full '>
					<label htmlFor='amount' className='text-sm'>
						Amount
					</label>
					<Input
						id='amount'
						type='text'
						placeholder='0.00'
						className='flex w-full justify-between h-10'
					/>
				</div>
			</div>

			<div className='grid border border-border p-4 rounded-md lg:grid-cols-3 w-full gap-4 items-center'>
				<div className='space-y-2 w-full '>
					<label htmlFor='transaction_hash' className='text-sm'>
						Transaction hash <span className='text-grey-400'>(Optional)</span>
					</label>
					<Input
						id='transaction_hash'
						type='datetime-local'
						placeholder=''
						className='flex w-full justify-between h-10'
					/>
				</div>
				<div className='space-y-2 w-full '>
					<label htmlFor='transaction_hash' className='text-sm'>
						Transaction hash <span className='text-grey-400'>(Optional)</span>
					</label>
					<div className=' flex w-full bg-[#F5F8FA] p-2 rounded-[6px]'>
						<div className='border text-xs flex gap-1 items-center p-1 justify-center border-dashed rounded  w-full'>
							<DocIcon />
							<p className='font-bold'>
								Select File{" "}
								<span className='text-grey-400 font-normal'>
									(supports .jpg, .png, .pdf. files...)
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className='space-y-2 w-full '>
					<label htmlFor='transaction_hash' className='text-sm'>
						Description <span className='text-grey-400'>(Optional)</span>
					</label>
					<Input
						id='transaction_hash'
						type='datetime-local'
						placeholder=''
						className='flex w-full justify-between h-10'
					/>
				</div>
			</div>
			<div className='flex w-full justify-end'>
				<Button className='gap-2 text-base'>Save Transaction</Button>
			</div>
		</div>
	);
};

export default TradeTab;
