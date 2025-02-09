const SpinnerIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			className={`${className} animate-spin`}
			width='24'
			height='24'
			viewBox='0 0 50 50'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle
				cx='25'
				cy='25'
				r='20'
				fill='none'
				stroke='rgba(0, 0, 0, 0.5)' /* Background circle */
				strokeWidth='5'
			/>
			<circle
				cx='25'
				cy='25'
				r='20'
				fill='none'
				stroke='currentColor' /* Foreground stroke color */
				strokeWidth='5'
				strokeLinecap='round'
				strokeDasharray='100'
				strokeDashoffset='75' /* Controls the length of the visible arc */
			/>
		</svg>
	);
};

export default SpinnerIcon;
