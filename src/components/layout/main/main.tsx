import React from "react";
import Text_initial from "../../sections/Stext_initial/text_initial";
import Animal_run from "../../sections/Sanimal_run/animal_run";
import Animal_controller from "../../sections/Sanimal_controller/animal_controller";
import Localization from "@/components/sections/Slocalization/localization";
import css_style from "@/components/layout/main/main.module.css";

interface ChildrenProps{
    children: React.ReactNode;
}

export default function Main({children}: ChildrenProps){
    return(
        <main className={ `w-full h-auto flex justify-center items-center flex-col m-20  ${css_style.main}`}>
            <Text_initial></Text_initial>
            <Animal_run></Animal_run>
            <Animal_controller></Animal_controller>
            <Localization></Localization>
            {children}
        </main>
    );
}