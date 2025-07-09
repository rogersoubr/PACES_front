import Title_Text from "../../ui/title_text/title_text";
import { textAll } from "@/utils/texts";
import css_style from "@/components/sections/Stext_initial/text_initial.module.css";

export default function Text_initial(){
    const {id, title, text} = textAll.section1_1;
    const {id2, title2, text2} = textAll.section1_2;
    return(
        <section className={`welcome ${css_style.text_initial}`}>
                <Title_Text id={id} title={title} text={text}>
                    <h3 className="font-bold text-lime-900">Veja o vídeo a seguir: </h3>
                </Title_Text>

                <iframe className="w-full max-w-sm h-56 " src="https://www.youtube-nocookie.com/embed/htUnYzKGT9s?si=FH_AagHA_NkwbvRx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>

                <Title_Text id={id2} title={title2} text={text2}>
                    <ul className={css_style.list}>
                        <li>Coletar e compartilhar dados atualizados sobre espécies e habitats.</li>
                        <li>Detectar riscos de extinção ou desequilíbrios ecológicos.</li>
                        <li>Integrar dados com IA ou outras tecnologias para prever e evitar desastres ecológicos.</li>
                    </ul>
                </Title_Text>

        </section>
    );
}