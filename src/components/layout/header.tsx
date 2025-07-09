import Link from "next/link";
import Image from "next/image";
import Navegation, {NavegationProps} from "../ui/navegation";

export default function Header(){
    //dados da ancoragem
    const items: NavegationProps[] = [        
        {
            url: "text_initial",
            label: "Proposta"
        },
        {
            url: "animais_run",
            label: "Animais"
        },        
        {
            url: "animal_controller",
            label: "Filhotes"
        },        
        {
            url: "Roger",
            label: "Contato"
        }
    ];

    return(
        <header className=" w-full h-24 bg-lime-50 flex  shadow-lg">
            <nav className="w-full h-24 flex flex-row justify-around items-center p-8 ">
                <Link href=""> 
                    <Image  src="cow-color.svg" width={90} height={90} alt="logo" className="cow" />
                </Link>
                <ul className="flex flex-row justify-around items-center w-100 h-24 m-56">
                    {items.map((item, i)=>(

                        <Navegation key={i} url={item.url} label={item.label} />

                    ))}

                </ul>
            </nav>
        </header>
    );
}