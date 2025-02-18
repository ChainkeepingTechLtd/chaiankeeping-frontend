import React from "react";

// Define the allowed types for the label
interface PlanLabelProps {
	type: "Basic" | "Premium" | "Customized"; // Explicitly specify the allowed types
}

const PlanLabel: React.FC<PlanLabelProps> = ({ type }: PlanLabelProps) => {
	// Determine styles based on the plan type
	const getLabelStyles = (type: PlanLabelProps["type"]): string => {
		switch (type) {
			case "Basic":
				return "bg-[#2F80ED] text-[#FFFFFF]"; // Light blue background, dark blue text
			case "Premium":
				return "bg-[#FFF3E0] text-[#E65100]"; // Light orange background, dark orange text
			case "Customized":
				return "bg-[#E8F5E9] text-[#1B5E20]"; // Light green background, dark green text
			default:
				return "bg-gray-100 text-gray-600"; // Default styling
		}
	};

	return (
		<span
			className={`inline-block px-2 py-1 rounded-full text-[10px] font-medium ${getLabelStyles(
				type
			)}`}
		>
			{type}
		</span>
	);
};

export default PlanLabel;
