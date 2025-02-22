"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PageWrapper from "@/pattern/accounts/templates/account-sidebar-wrapper";
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
		// Redirect to login if there's no access token or user data
		if (!loginState.accessToken || !loginState.user) {
			router.push(APP_ROUTES.login);
		}
	}, [loginState.accessToken, loginState.user, router]);

	// Don't render anything if the user is not authenticated
	if (!loginState.accessToken || !loginState.user) {
		return null;
	}

	return (
		<div
			className={cn(
				"relative bg-[#F8F9FA] w-screen min-h-screen h-auto flex flex-col font-dmsans"
			)}
		>
			{/* Topbar */}
			<Topbar />

			{/* Main Content Wrapper */}
			<div className='flex w-full flex-1 overflow-hidden'>
				{/* Sidebar is part of PageWrapper */}
				<PageWrapper>{children}</PageWrapper>
			</div>
		</div>
	);
}
