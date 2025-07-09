"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "@/skeleton";

interface Population {
  id: string;
  nomeA: string;
  apelido: string;
  idade: number;
  endereco: string;
  filhos: string[];
}

const animalImages: Record<string, string> = {
  "Tamanduá-bandeira": "/images/tamandua.jfif",
  "Peixe-boi": "/images/peixe-boifilhote.jpg",
  "Lobo-guará": "/images/lobo-guara.jpg",
  "Onça-pintada": "/images/onca.jpg",
  "Ararinha-azul": "/images/arara.jpg",
  "baleia-azul": "/images/baleia.jpg",
};

export default function PopulationsServices() {
  const [populations, setpopulations] = useState<Population[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://paces.onrender.com/populacoes")
      .then((response) => {
        setpopulations(response.data.animal);
      })
      .catch((error) => {
        console.log("DEBUG DO ROGER: ",error);
      }).finally(()=>{
        setLoading(false);
      } )
      ;
  }, []);

  if (loading) return <Skeleton />;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-lime-900 text-4xl">Famílias</h1>
      <ul className="flex flex-wrap gap-4">
        {populations.map((p) => (

          <li key={p.id} className="bg-lime-50 p-4 border-4 border-b-lime-900 rounded shadow mb-4 text-lime-900  w-60">

            <h3 className="font-bold">Animal: {p.apelido} | {p.nomeA}</h3>
            <p><strong>Idade:</strong> {p.idade}</p>
            <p><strong>Endereço:</strong> {p.endereco}</p>
            <p><strong>Filhos:</strong> {p.filhos.join(', ')}</p>
            <img src={animalImages[p.nomeA]} alt={p.nomeA} className="rounded shadow w-60"/>
          </li>

        ))}

      </ul>
    </div>
  );
}