"use client"
import { Link } from 'react-scroll'
import Image from "next/image";
import Navegation, {NavegationProps} from "../ui/navegation";

export default function Header(){
    //dados da ancoragem
    const items: NavegationProps[] = [        
        {
            url: "allAnimals",
            label: "Animais"
        },
        {
            url: "allFamilis",
            label: "Filhotes"
        },        
        {
            url: "allLocals",
            label: "Locais"
        },        
        {
            url: "Roger",
            label: "Contato"
        }
    ];

    return(
        <header className=" w-full h-24 bg-lime-50 flex  shadow-lg">
            <nav className="w-full h-24 flex flex-row justify-around items-center p-8 ">
                <Link to='welcome' smooth={true} duration={500} > 
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