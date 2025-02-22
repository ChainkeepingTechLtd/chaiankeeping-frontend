import React from "react";

export interface IIconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    height?: string;
    width?: string;
    className?: string;
}
export interface IInputIconProps extends IIconProps {
    focus?: boolean; // input focus state
    toggle?: boolean; // toggle password input visible state
}