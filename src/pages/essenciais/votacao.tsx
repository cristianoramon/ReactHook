import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function Votacao() {

    const [dados, setDados] = useState({votosVerde: 0, votosRoxo: 0});
    
    function votoRoxo() {
        setDados((dadosAtuais) => {
            return {...dadosAtuais, votosRoxo: dadosAtuais.votosRoxo+1}
        });
    }

    
    function votoGreen() {
        setDados((dadosAtuais) => {
            return {...dadosAtuais, votosVerde: dadosAtuais.votosVerde+1}
        });
    }

    return (
        <Pagina titulo="Votação" subtitulo="State de Votação">
            
            <Flex col center >
                <Display texto="Qual a melhor cor"
                textoComplementar={`Verde:${dados.votosVerde} | Roxo: ${dados.votosRoxo}`}/>
                 <Flex gap={5}>

                    <Botao cor="bg-green-500"
                    onClick={ () => votoGreen()}
                    redondo
                    tamanho="2xl"/>
                    <Botao cor="bg-purple-500"
                    onClick={()=>votoRoxo()}
                    redondo
                    tamanho="2xl"/>
                    <Botao cor="bg-gray-500"
                    texto="Zerar"
                    onClick={()=>setDados({votosVerde: 0, votosRoxo: 0})}
                    redondo
                    tamanho="2xl"/>

                 </Flex>
            </Flex>
        </Pagina>
    )
}