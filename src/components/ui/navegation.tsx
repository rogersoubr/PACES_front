"use client"//pega com interacao de usuario
import { Link } from 'react-scroll'

export interface NavegationProps{
    url: string,//vai receber a classe que vai
    label: string;
}

//componente reutilizavel
export default function Navegation({ url, label}: NavegationProps){
    return(
        <li className="flex transition-all  duration-100 hover:border-b-4 border-amber-950 cursor-pointer  w-auto h-auto items-center" >
            <Link  to={url} smooth={true} duration={500} className="flex w-full" >
                {label }
            </Link>
        </li>

    );


}