import React, { forwardRef } from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "../../lib/utils";

const NavigationMenu = forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		ref={ref}
		className={cn(
			"z-10 flex max-w-max flex-1 items-center justify-center",
			className
		)}
		{...props}
	>
		{children}
		<NavigationMenuViewport />
	</NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={cn(
			"h-full group flex flex-1 list-none items-center justify-center space-x-1",
			className
		)}
		{...props}
	/>
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
	"group inline-flex h-full w-max items-center justify-center rounded-none bg-background px-[12px] pt-[8px] pb-[24px] text-sm text-gray-500 data-[active]:text-secondary font-medium transition-colors hover:text-secondary hover:border-b-[1.5px] hover-border-secondary focus:bg-accent focus:text-secondary focus:outline-none focus:border-b-[1.5px] focus-border-secondary disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 data-[active]:border-b-[1.5px] data-[active]:border-b-secondary data-[state=open]:border-b-[1.5px] data-[state=open]:border-b-secondary"
);

const navigationMenulinkStyle = cva(
	"inline-flex h-full min-w-[74px] w-fit items-center justify-center rounded-none bg-background px-[12px] py-[8px] text-sm text-gray-500 font-medium transition-colors whitespace-nowrap hover:text-secondary hover:border-b-[1.5px] hover:border-secondary focus:bg-accent focus:text-secondary data-[active]:text-secondary data-[active]:border-b-[1.5px] data-[active]:border-b-secondary focus:outline-none focus:border-b-[1.5px] focus:border-secondary disabled:pointer-events-none disabled:opacity-50"
);

const navigationMenulinkStyleTwo = cva(
	"inline-flex mt-4  h-10 min-w-[74px] gap-5 w-fit items-center justify-center rounded-lg bg-background px-[12px] py-[8px] text-sm text-gray-500 font-dmsans font-medium transition-colors whitespace-nowrap hover:text-secondary hover:bg-secondary-accent focus:bg-secondary-accent focus:text-secondary data-[active]:text-secondary data-[active]:font-medium data-[active]:bg-secondary-accent focus:outline-none  disabled:pointer-events-none disabled:opacity-50"
);

const navigationMenuListItemStyle = cva(
	"flex min-h-[92px] h-fit w-[314px] items-start justify-center bg-background p-[12px] text-sm text-gray-500 font-normal transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent data-[state=open]:bg-accent rounded-[8px]"
);

const NavigationMenuTrigger = forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		className={cn(navigationMenuTriggerStyle(), "group", className)}
		{...props}
	>
		{children}
		<ChevronDown
			className='relative top-[1px] ml-1 h-3 w-3 text-gray-500 transition duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-secondary'
			aria-hidden='true'
		/>
	</NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={cn(
			"left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
			className
		)}
		{...props}
	/>
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
	<div className={cn("absolute right-0 top-full flex justify-center")}>
		<NavigationMenuPrimitive.Viewport
			className={cn(
				"origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-fit overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
				className
			)}
			ref={ref}
			{...props}
		/>
	</div>
));
NavigationMenuViewport.displayName =
	NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		className={cn(
			"top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
			className
		)}
		{...props}
	>
		<div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md' />
	</NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
	NavigationMenuPrimitive.Indicator.displayName;

export {
	navigationMenuTriggerStyle,
	navigationMenuListItemStyle,
	navigationMenulinkStyle,
	navigationMenulinkStyleTwo,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
};
