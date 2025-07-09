"use client"

import { useEffect, useState } from "react"

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

    useEffect(()=>{

        fetch("https://paces.onrender.com/animais").then((res) => res.json() ).then((data)=> setAnimals(data.animal) );

    }, [] )
}
