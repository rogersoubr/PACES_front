import React from "react";
import Text_initial from "../sections/text_initial";
import Animal_run from "../sections/animal_run";
import Animal_controller from "../sections/animal_controller";

interface ChildrenProps{
    children: React.ReactNode;
}

export default function Main({children}: ChildrenProps){
    return(
        <main className="bg-amber-700">
            <Text_initial></Text_initial>
            <Animal_run></Animal_run>
            <Animal_controller></Animal_controller>
            {children}
        </main>
    );
}