import React, { useState } from "react";
import MainMenuIcon from "../atoms/menu-icon";
import { useRouter } from "next/navigation";
import { Card, CardContent, Textarea } from "@chainkeeping/ui";
import ReplyIcon from "../atoms/reply-icon";
import StarIcon from "../atoms/start-icon";
import HalfStarIcon from "../atoms/half-star-icon";
import CancelIcon from "../atoms/cancel-icon";

// Star Rating Component
const StarRating = ({ rating, maxRating = 5 }) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;

	return (
		<div className='flex items-center gap-1'>
			{[...Array(fullStars)].map((_, index) => (
				<StarIcon key={index} filled={true} />
			))}
			{hasHalfStar && <HalfStarIcon filled={true} />}
			{[...Array(maxRating - fullStars - (hasHalfStar ? 1 : 0))].map(
				(_, index) => (
					<StarIcon key={index} filled={false} />
				)
			)}
		</div>
	);
};

const ReviewsAndFeedback = () => {
	const [replyingReviewId, setReplyingReviewId] = useState<number | null>(null);
	const [replyText, setReplyText] = useState("");

	const router = useRouter();

	const handleGoBack = () => {
		router.back();
	};

	const reviews = [
		{
			id: 1,
			name: "Winner Mugana",
			date: "Mar 28, 2023",
			message:
				"Lorem ipsum dolor sit amet consectetur. Aliquet ut iaculis lectus duis egestas elit mattis.",
		},
		{
			id: 2,
			name: "Maria Dolores",
			date: "Mar 28, 2023",
			message:
				"Lorem ipsum dolor sit amet consectetur. Sagittis condimentum malesuada turpis in nulla mauris.",
		},
		{
			id: 3,
			name: "Lewis Baker",
			date: "Dec 28, 2022",
			message:
				"Lorem ipsum dolor sit amet consectetur. Sagittis condimentum malesuada turpis in nulla mauris.",
		},
	];

	return (
		<div className='h-full w-full flex flex-col'>
			<div className='fixed left-0 w-full bg-white shadow-md z-10 pt-3'>
				<div className='flex flex-col justify-between md:px-8 mx-auto px-4'>
					<div className='flex justify-between items-center py-4'>
						<div
							className='flex items-center gap-2 cursor-pointer'
							onClick={handleGoBack}
						>
							<MainMenuIcon />
							<h6 className='font-bold fomt-sen'>Reviews & Feedback</h6>
						</div>
					</div>
				</div>
			</div>

			<div className='pt-24 md:px-8 w-full'>
				<div className='w-fit flex flex-col items-center px-[18px] pb-[144px]'>
					<Card className='bg-white w-fit max-w-[939px] lg:w-[939px] h-fit flex flex-col p-8 rounded-[8px] shadow-md border-none'>
						<div className='flex w-full border-b pb-3 items-center justify-between'>
							<div className='text-sm'>
								<h6 className='font-bold text-grey-300'>FEEDBACK</h6>
								<p className='text-2xl font-medium'>
									4.5<span className='text-base text-grey-300'>/5</span>
								</p>
								<StarRating rating={4.5} />
							</div>
							<div className='flex flex-col gap-6'>
								<div className='flex gap-2 cursor-pointer'>
									<div className='text-sm'>
										<p className='text-sm text-grey-400'>12 Reviews</p>
									</div>
								</div>
							</div>
						</div>

						<CardContent className='w-full h-full flex flex-col gap-4'>
							{reviews.map((review) => (
								<div
									key={review.id}
									className='w-full flex flex-col gap-3 border-b pb-3'
								>
									<div>
										<p className='font-medium'>{review.name}</p>
										<p className='text-xs text-grey-300'>{review.date}</p>
									</div>
									<p className='text-sm'>{review.message}</p>

									{replyingReviewId !== review.id && (
										<div
											className='flex cursor-pointer gap-1 text-sm text-secondary items-center'
											onClick={() => setReplyingReviewId(review.id)}
										>
											<ReplyIcon /> <span>Reply</span>
										</div>
									)}

									{replyingReviewId === review.id && (
										<div className='flex flex-col gap-2 mt-2'>
											<Textarea
												className='w-full border min-h-24 p-2 rounded-md text-sm'
												placeholder='Write your reply...'
												value={replyText}
												onChange={(e) => setReplyText(e.target.value)}
												maxLength={144}
											/>

											<div className='flex w-full justify-end text-xs text-grey-300'>
												{replyText.length} / 144
											</div>
											<div className='flex gap-4 mt-4'>
												<button className='flex text-sm text-secondary gap-1'>
													<ReplyIcon /> <span>Submit</span>
												</button>
												<button
													className='flex text-sm text-secondary gap-1'
													onClick={() => {
														setReplyingReviewId(null);
														setReplyText("");
													}}
												>
													<CancelIcon />
													Cancel
												</button>
											</div>
										</div>
									)}
								</div>
							))}

							<span className='text-sm text-secondary'>Load more...</span>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default ReviewsAndFeedback;
