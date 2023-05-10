import React from "react";

export type SwitcherType = {
    switcher: number,
    setSwitcher: React.Dispatch<React.SetStateAction<number>>,
    title1: string,
    title2: string,
    color: string
}