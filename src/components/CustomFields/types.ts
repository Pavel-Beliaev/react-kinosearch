import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    title: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    title?: string;
}