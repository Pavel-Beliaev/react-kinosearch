import React, {ReactNode} from "react";

export type PageDataType = {
    [key: string]: {
        title: string;
        heading: string;
        url: string;
    };
};

export type HeaderProps = {
    pathname: string
}

export type ButtonProps = {
    children: string
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    children: ReactNode;
}
