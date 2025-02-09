interface ToggleIconProps {
	toggled: boolean;
	onToggle: () => void;
}

const ToggleIcon: React.FC<ToggleIconProps> = ({ toggled, onToggle }) => {
	return (
		<svg
			width='48'
			height='48'
			viewBox='0 0 68 68'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			onClick={onToggle}
			style={{ cursor: "pointer" }}
		>
			<rect
				x='4'
				y='18'
				width='42'
				height='24'
				rx='12'
				fill={toggled ? "#D82E2E" : "#CBD5E1"}
			/>
			<g filter='url(#filter0_d_441_2614)'>
				<circle cx={toggled ? "14" : "34"} cy='30' r='9' fill='white' />
			</g>
			<defs>
				<filter
					id='filter0_d_441_2614'
					x='0'
					y='0'
					width='68'
					height='68'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='4' />
					<feGaussianBlur stdDeviation='12.5' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.682353 0 0 0 0 0.682353 0 0 0 0 0.752941 0 0 0 0.15 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_441_2614'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_441_2614'
						result='shape'
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default ToggleIcon;
