import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import { useEffect, useRef, useState } from "react";

export default function ContagemCaracteresRef() {
    const quantCaracteres = 400
    const [caractRestante, setCaractRestante] = useState(quantCaracteres);
    const refTexto = useRef<any>();
    const contador = useRef<any>();  

    function iniciaContador(){
        clearTimeout(contador.current);
        contador.current = setInterval(()=>{
            let qtCaracteres = refTexto.current.value.length;
            setCaractRestante(quantCaracteres - qtCaracteres);
        },1000);
    }

    return (
        <Pagina titulo="Contagem de Caracteres" subtitulo="Contagem de Caracteres">
            <Display texto="Digite o texto" textoComplementar={`${caractRestante} Restantes`}/>
            <textarea
            ref={refTexto} 
            onInput={iniciaContador}          
            className={`border border-zinc-700 bg-zinc-700 text-white text-2x1 w-3/5 h-72 rounded p-5`}      ></textarea>
        
        </Pagina>
               
    )
}
