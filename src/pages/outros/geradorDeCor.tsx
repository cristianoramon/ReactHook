import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useBoolean from "@/data/hooks/useBoolean";
import { use, useEffect, useLayoutEffect, useRef, useState } from "react";

export default function GeradorDeCor() {

    // 1 - Mostrar a div condicionalmente,a div deve aparecer quando clicar no botão sortear e desaparecer quando clicar no botão
    // 2 - Exibir um texto no nosso display : "Clique em sortear, ou uma cor aleatória" " 
    // 3 - Alterar a cor da div de acordo com a cor sorteada

    const [mostrar,toggleMostrar,mostrarTrue,mostrarFalse] = useBoolean(false);
    const [texto,setTexto] = useState("Clique em sortear");
    const referencia = useRef<any>();
    function gerarCorAleatoria() {

        const numeroAleatorioHexadecimal = Math.floor(Math.random()*0xffffff);
        const cor = numeroAleatorioHexadecimal.toString(16);
        return cor;        
    }
    useLayoutEffect(() => {
     
        if (mostrar) {
            const cor = gerarCorAleatoria();
            setTexto( `#${cor}`);
            referencia.current.style.backgroundColor = `#${cor}`;  
        }
        else {
            setTexto("Clique para sortear");
        }   
    },[mostrar]);

  
    return (    <Pagina titulo="Gerador de Cor" subtitulo="Gerando cores aleatorias">
                   <Flex>
                      <Botao texto="Sortear cor" onClick={mostrarTrue}/>
                      <Botao texto="Apagar cor" onClick={mostrarFalse}/>
                    </Flex>
                    <Display texto={texto}/>


                    { mostrar ?<div ref={referencia}  className="h-32 w-32">  </div> : "" }
                </Pagina>
    )
};