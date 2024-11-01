import Pagina from "@/components/template/Pagina";
import { use, useLayoutEffect, useState } from "react";

export default function Texto(){

    const [texto,setTexto] = useState("Texto secreto");

    useLayoutEffect(() => { 

        setTexto('ola');
      }
    ,[]);

    return (
        <Pagina titulo="texto secreto" subtitulo="entendendo um problema ">
          <p className="text-5xl text-gray-300 m-4" >{texto}</p>
        </Pagina>
    )
}