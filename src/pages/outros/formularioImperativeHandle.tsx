import InputComReferencia from "@/components/formulario/InputComReferencia";
import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useRef } from "react";

export default function MemoizacaoFuncao() {
    const referencia = useRef<any>();

    function apagar(){
        referencia.current.apagar();
    }

    function textPadrao(){
        referencia.current.textoPadrao();
    }

    return (
        <Pagina titulo="Medificando uma referencia" subtitulo="Usando useRef ">
            <Flex col center>
                <InputComReferencia tipo="text" ref={referencia} label="Digite o texto" valor=""/>
                
            </Flex>
            <Flex center>
                <Botao texto="Apagar" onClick={apagar}></Botao>
                <Botao texto="Padrao" onClick={textPadrao}></Botao>
            </Flex>
        </Pagina>
    )
}