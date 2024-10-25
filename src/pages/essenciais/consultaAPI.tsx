import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { use, useEffect, useState } from "react";

export default function API() {
    
    const[url,setUrl]= useState();

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => setUrl(data.message))
    }, []) ; 

    //Efeito colateral
    // fetch("https://dog.ceo/api/breeds/image/random")
    // .then(response => response.json())
    // .then(data => setUrl(data.message))
   
    return (
        <Pagina titulo="API" subtitulo="Consumindo APIs">
            <img className="max-w-screen-sm" src={url}/> 
        </Pagina>
    )
}