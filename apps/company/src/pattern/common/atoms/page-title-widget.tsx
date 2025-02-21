"use client"

import { usePathname } from "next/navigation"
import { navigation } from "../templates/topbar"

export const PageTitleWidget = () => {
    const pathname = usePathname()

    const currentPage = navigation.find((item) => pathname.startsWith(item.href as string))
    const pageTitle = currentPage ? currentPage.title : "Page Not Found"

    return <h1 className="text-base font-normal text-primary">{pageTitle}</h1>
}

