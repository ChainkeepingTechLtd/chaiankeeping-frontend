import React, { useState } from "react";
import {
	Button,
	Card,
	CardContent,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Textarea,
} from "@chainkeeping/ui";

const ProfileSettings = () => {
	return (
		<div className='h-full flex w-full pt-24'>
			<Card className='card-shadow lg:w-[868px]'>
				<CardContent>
					<form className='space-y-6'>
						<h6 className='text-grey-300'>BASIC INFORMATION</h6>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
							<div className='space-y-2'>
								<label htmlFor='email' className='text-sm'>
									Email Address
								</label>
								<Input
									id='email'
									type='email'
									placeholder='yourmail@gmail.com'
								/>
							</div>
							<div className='space-y-2'>
								<label htmlFor='source' className='text-sm'>
									How did you hear about us?
								</label>
								<Select>
									<SelectTrigger className='h-[48px]'>
										<SelectValue placeholder='Select' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='social'>Social Media</SelectItem>
										<SelectItem value='friend'>Friend</SelectItem>
										<SelectItem value='search'>Search Engine</SelectItem>
										<SelectItem value='other'>Other</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className='space-y-2'>
								<label htmlFor='firstName' className='text-sm'>
									First Name
								</label>
								<Input id='firstName' placeholder='John' />
							</div>
							<div className='space-y-2'>
								<label htmlFor='lastName' className='text-sm'>
									Last Name
								</label>
								<Input id='lastName' placeholder='Doe' />
							</div>
						</div>
						<div className='space-y-2'>
							<label htmlFor='inquiry' className='text-sm'>
								Your inquiry / Feedback
							</label>
							<Textarea
								id='inquiry'
								placeholder='Your text here...'
								className='min-h-[96px]'
							/>
						</div>
						<div className='w-full lg:flex lg:justify-end'>
							<Button className='w-full lg:w-fit'>Submit</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default ProfileSettings;
