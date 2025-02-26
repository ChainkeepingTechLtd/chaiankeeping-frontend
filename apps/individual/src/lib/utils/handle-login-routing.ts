import { show } from "@ebay/nice-modal-react";
import {
	COMPANY_DASHBOARD_URL,
	PERSONAL_DASHBOARD_URL,
	PRACTITIONERS_DASHBOARD_URL,
} from "../routes";
import { GenericErrorModal } from "@/pattern/common/organisms/generic-error-modal";

export const handleLoginRouting = (
	accountType: "personal" | "company" | "practitioners" | ""
) => {
	switch (accountType) {
		case "personal":
			window.open(PERSONAL_DASHBOARD_URL, "_blank");
			break;
		case "company":
			window.open(COMPANY_DASHBOARD_URL, "_blank");
			break;
		case "practitioners":
			window.open(PRACTITIONERS_DASHBOARD_URL, "_blank");
			break;
		default:
			show(GenericErrorModal, {
				message:
					"We couldn't determine the right dashboard to direct you to. Please confirm that you're properly registered or try logging in again.",
			});
	}
};
