import React from "react";
import {IKnowFor, IResultsMovies} from "../Store/tmdbService/@types";



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

export type RatingProps = {
    rating?: number | null,

    fill?: string,
}

export type PeopleCardProps = {
    name: string,
    knownFor: IKnowFor[]
    profilePath: string,
}

export type PaginationProps = {
    value: number,
    changePage: (page: number) => void
    totalPage: number | undefined
}

export interface SliderProps {
    slideCount: number,

    arrMovies?: IResultsMovies[],
}
