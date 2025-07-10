import Title_Text from "../../ui/title_text/title_text";
import PopulacoesServices from "@/components/services/populacoesServices";
import { textAll } from "@/utils/texts";
import css_style from "@/components/sections/Sanimal_controller/animal_controller.module.css"

export default function Animal_controller(){
    const {id, title, text} = textAll.section3;
    return(
        <section className={`allFamilis ${css_style.animal_controller}`}>
                <Title_Text id={id} title={title} text={text}>

                </Title_Text>
                <PopulacoesServices/>
        </section>
    );

}