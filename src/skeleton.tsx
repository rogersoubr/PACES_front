import React from "react";
//vai mostrar enquanto a página real está carregando
export default function Skeleton(){
    return (

        <div className="flex flex-col justify-center items-center">
            <h1>Users</h1>
            <ul className="flex flex-wrap gar-2" >
                {/*espalha o array com 10 posições, para cada posição, retorna um li. */}
                {/* value = valor do elemento a. index = valor de 0 a 9. map percorre cada um desse array e cria li  */}
                {[...Array(10)].map((value, index)=>{
                    return(
                        <li key={index}className="bg-lime-50 p-4 border-2 border-b-lime-900 rounded shadow mb-4 text-lime-900  w-60" >
                            <div className="h-6 bg-lime-200 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-lime-200 rounded w-full mb-1"></div>
                            <div className="h-4 bg-lime-200 rounded w-5/6 mb-1"></div>
                            <div className="h-4 bg-lime-200 rounded w-2/3 mb-1"></div>
                            <div className="h-4 bg-lime-200 rounded w-4/5"></div>

                        </li>
                    );
                })}
            </ul>

        </div>

    );
}