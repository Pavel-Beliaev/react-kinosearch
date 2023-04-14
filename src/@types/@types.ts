import React from "react";

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

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: string | React.ReactElement
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    title?: string;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    title: string;
}
