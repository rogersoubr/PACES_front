import Title_Text from "../../ui/title_text/title_text";
import LocaisServices from "@/components/services/localizationServices";
import { textAll } from "@/utils/texts";
import css_style from "@/components/sections/Sanimal_run/animal_run.module.css"

export default function Localization(){
    const {id, title, text} = textAll.section4;
    return(
        <section className={`allAnimals ${css_style.animal_num}`}>
                <Title_Text id={id} title={title} text={text}>

                <LocaisServices/>

                </Title_Text>
        </section>
    );

}