"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Topbar } from "@/pattern/common/templates/topbar";
import PageWrapper from "@/pattern/settings/templates/settings-sidebar-wrapper";
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
		<div className='relative bg-[#F8F9FA] w-screen min-h-screen h-auto flex flex-col font-dmsans'>
			<Topbar />
			<div className='flex w-full flex-1 overflow-hidden'>
				<PageWrapper>{children}</PageWrapper>
			</div>
		</div>
	);
}
