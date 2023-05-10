import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: string | React.ReactElement
}