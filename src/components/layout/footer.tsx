"use client"
import { Link } from 'react-scroll';
import Image from "next/image";
import Navegation, {NavegationProps} from "../ui/navegation";
import Social from '../ui/social';
export default function Footer(){

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
        }   
    ];

    return(
        <footer className="Roger bg-yellow-700 text-lime-100 p-6 rounded-t-2xl mt-10 mx-auto flex flex-col md:flex-row justify-between items-center shadow-lg w-full">

            <nav className="flex gap-4 mt-2 md:mt-0 flex-col md:flex-row justify-around items-center">
                <Link to='welcome' smooth={true} duration={500} > 
                    <Image  src="cow-color.svg" width={90} height={90} alt="logo" className="cow" />
                </Link>
                <ul className="flex flex-col md:flex-row justify-around items-center w-100 h-24 m-56">
                    {items.map((item, i)=>(

                        <Navegation key={i} url={item.url} label={item.label} />

                    ))}
                </ul>

            </nav>

            <p className="flex transition-all  duration-100 hover:border-b-4 border-amber-950 cursor-pointer  w-auto h-auto items-center">
                &copy; 2025 - Projeto PACES - Roger Brandão
            </p>
            <Social/>

        </footer>
    );
}
