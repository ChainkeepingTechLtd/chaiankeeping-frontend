"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Topbar } from "@/pattern/common/templates/topbar";
import { cn } from "@chainkeeping/ui";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/root-reducer";
import { APP_ROUTES } from "@/lib/routes";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const loginState = useSelector((state: RootState) => state.loginState);

	useEffect(() => {
		if (!loginState.accessToken || !loginState.user) {
			router.push(APP_ROUTES.login);
		}
	}, [loginState.accessToken, loginState.user, router]);

	if (!loginState.accessToken || !loginState.user) {
		return null;
	}

	return (
		<div
			className={cn(
				"relative bg-[#F8F9FA] w-screen min-h-svh h-fit flex flex-col  gap-[12px] font-dmsans transition-all duration-200 ease-in-out"
			)}
		>
			<Topbar />
			<main className='bg-[#F4F7F9] w-full h-fit flex flex-col items-center sm:mt-[var(--topbar-height)]'>
				{children}
			</main>
		</div>
	);
}
