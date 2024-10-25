import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function ContagemCaracteres() {
    const [qtCaracteres, setQtCaracteres] = useState(400);
    const [caractRestante, setCaractRestante] = useState(0);
    const [texto, setTexto] = useState(""); 

    useEffect(() => {

        let timer = setTimeout(()=> {
            if (texto.length > qtCaracteres) {
                window.alert("Limite atingido");                
            }
            setCaractRestante(qtCaracteres - texto.length);
            console.log('atualizei');
        },100);

        return ()=> {clearTimeout(timer);}

    },[texto]);


    return (
        <Pagina titulo="Contagem de Caracteres" subtitulo="Contagem de Caracteres">
            <Display texto="Digite o texto" textoComplementar={`${caractRestante} Restantes`}/>
            <textarea
            value={texto}
            onInput={(e)=>{
                setTexto(e.currentTarget.value);
            }}
            className={`border border-zinc-700 bg-zinc-700 text-white text-2x1 w-3/5 h-72 rounded p-5`}       ></textarea>
        
        </Pagina>
               
    )
}
