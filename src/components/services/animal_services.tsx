"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "@/skeleton";

interface Animal{
    id: string
    nomeA: string;
    classe: string;
    familia: string;
    ambiente: string;
    bioma: string;
    exemplares: number;
    extincao: boolean;
}

export default function AnimaisServices(){
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        axios.get("https://paces.onrender.com/animais").then((response)=>{
            setAnimals(response.data.animal);
        } ).catch((error)=>{
            console.log("DEBUG DO ROGER: ",error);
        } ).finally(()=>{
        setLoading(false);
      } );

    }, [] );

    if (loading) return <Skeleton />;

    return(

        <div className="flex flex-col justify-center items-center">
            <h1 className="text-lime-900 text-4xl">Nossos amigos:</h1>
            <ul className="flex flex-wrap gap-2">
                {animals.map((a)=>(
                    <li key={a.id} className="bg-lime-200 p-4 rounded shadow mb-4 text-lime-900  w-60">
                        <h3 className="font-bold">{a.nomeA}</h3>
                        <p><strong>Classe:</strong> {a.classe}</p>
                        <p><strong>Família:</strong> {a.familia}</p>
                        <p><strong>Ambiente:</strong> {a.ambiente}</p>
                        <p><strong>Bioma:</strong> {a.bioma}</p>
                        <p><strong>Exemplares:</strong> {a.exemplares}</p>
                        <p><strong>Em extinção:</strong> {a.extincao ? "Sim" : "Não"}</p>

                    </li>
                ) )}

            </ul>
        </div>

    );


}
