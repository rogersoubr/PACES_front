'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "@/skeleton";

interface Local {
  id: string;
  nome: string;
  proposito: string;
  endereco: string;
}

export default function LocaisServices() {
  const [locals, setLocals] = useState<Local[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://paces.onrender.com/locais")
      .then((response) => {
        setLocals(response.data.animal);
      })
      .catch((error) => {
        console.log("DEBUG DO ROGER: ",error);
      }).finally(()=>{
        setLoading(false);
      } );
  }, []);

  if (loading) return <Skeleton />;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-lime-900 text-4xl">Locais</h1>
      <ul className="flex flex-wrap gap-2">
        {locals.map((local) => (
          <li key={local.id} className="bg-lime-200 p-4 rounded shadow mb-4 text-lime-900  w-60">
            <h3 className="font-bold">{local.nome}</h3>
            <p><strong>Propósito:</strong> {local.proposito}</p>
            <p><strong>Endereço:</strong> {local.endereco}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}