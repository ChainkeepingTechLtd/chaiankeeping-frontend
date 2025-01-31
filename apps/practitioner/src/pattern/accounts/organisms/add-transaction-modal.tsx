import { FC, useState } from "react";
import Modal from "../molecules/transaction-modal";
import TradeTab from "../molecules/trade-tab";
import IncomingTab from "../molecules/incoming-tab";
import OutgoingTab from "../molecules/outgoing-tab";

interface ModalComponentProps {
	isOpen: boolean;
	onClose: () => void;
}

const AddTransactionModalComponent: FC<ModalComponentProps> = ({
	isOpen,
	onClose,
}) => {
	const [activeTab, setActiveTab] = useState("Trade");

	const renderTabContent = () => {
		switch (activeTab) {
			case "Trade":
				return <TradeTab />;
			case "Incoming":
				return <IncomingTab />;
			case "Outgoing":
				return <OutgoingTab />;
			default:
				return null;
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title='Transaction Details'>
			<div className='tabs-container p-4'>
				<div className='px-3 flex gap-5 items-start'>
					<button
						className={`tab  px-3 pb-2 ${activeTab === "Trade" ? "active border-b-secondary border-b-2" : "text-grey-400"}`}
						onClick={() => setActiveTab("Trade")}
					>
						Trade
					</button>
					<button
						className={`tab px-3 pb-2 ${activeTab === "Incoming" ? "active border-b-secondary border-b-2" : "text-grey-400"}`}
						onClick={() => setActiveTab("Incoming")}
					>
						Incoming
					</button>
					<button
						className={`tab px-3 pb-2 ${activeTab === "Outgoing" ? "active border-b-secondary border-b-2" : "text-grey-400"}`}
						onClick={() => setActiveTab("Outgoing")}
					>
						Outgoing
					</button>
				</div>
				<div className='tabs-content'>{renderTabContent()}</div>
			</div>
		</Modal>
	);
};

export default AddTransactionModalComponent;
