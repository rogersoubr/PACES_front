import React from "react";
import css_style from "@/components/ui/title_text/title_text.module.css"
export interface TitleTextProps{
    id: string
    title: string;
    text: string;
    children?: React.ReactNode//deixar um coisa opcional
}

export default function Title_Text({title, text, children}:TitleTextProps){

    
    return(
        <article className={`${css_style.title_text} w-full h-full`}>
            <h1 className="font-bold text-lime-900 text-5xl">{title}</h1>
            <p className="text-justify text-yellow-700">
                {text}
            </p> 
            {children}
        </article>
    );

}