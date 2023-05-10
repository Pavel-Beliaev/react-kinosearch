import React, {RefObject} from "react";

export type DropDownNavbarType = {
    isVisible: boolean
}

export type NavbarType = {
    navbarRef?: RefObject<HTMLDivElement>
}

export type SliderWrapperType = {
    title: string,
    children:  React.ReactElement | React.ReactNode
}

export type HeaderProps = {
    pathname: string
}
