"use client";
import React, { FC, ReactNode } from "react";

interface IProps {
    children: ReactNode;
    isVisible: boolean;
}

/**
 * @description
 * Component that either shows or hide children
 */
const Hidden: FC<IProps> = ({ children, isVisible }) => {
    return <>{isVisible ? children : null}</>;
};

export { Hidden };
