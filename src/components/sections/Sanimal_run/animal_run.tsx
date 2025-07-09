import Title_Text from "../../ui/title_text/title_text";
import { textAll } from "@/utils/texts";
import css_style from "@/components/sections/Sanimal_run/animal_run.module.css"

export default function Animal_run(){
    const {id, title, text} = textAll.section2;
    return(
        <section className={`allAnimals ${css_style.animal_num}`}>
                <Title_Text id={id} title={title} text={text}>
                </Title_Text>

        </section>
    );

}