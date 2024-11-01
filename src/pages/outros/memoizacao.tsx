import InputFormatado from "@/components/formulario/InputFormatado";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useMemo, useState } from "react";

export default function Memoizacao() {

    const [numero1, setNumero1] = useState(1);
    const [numero2, setNumero2] = useState(1);
    const [numero3, setNumero3] = useState(1);
    const [numero4, setNumero4] = useState(1);
    const [numero5, setNumero5] = useState(1);

    function potenciaUseMemo() {
        let future = Date.now()+3000;

        while (Date.now() < future);
        return numero1 ** numero2;

    }
 
    let potencia = useMemo(() => {
             
      return potenciaUseMemo();

    },[numero1,numero2]);
    
    let soma  = numero3 + numero4;  
    return (
        <Pagina titulo="Memoizacao" subtitulo="Hook useMemo">
            <Flex col center>
            <Display  texto = {
                    <>
                    <span> {numero1} </span>
                    <sup> {numero2} </sup>
                    <span> = {potencia} </span>
                    </>
                }></Display>

                <Display  texto = {
                     ` ${numero3} + ${numero4} = ${soma}`
                }></Display>
                
                <Flex>
                    <InputFormatado valor={numero1}
                    onInput={ (e) => setNumero1(Number(+e.target.value))} 
                    label="Numero 1" 
                    tipo="number" />
                        <InputFormatado valor={numero2}
                    onInput={ (e) => setNumero2(Number(+e.target.value))} 
                    label="Numero 2" 
                    tipo="number" />
                </Flex>

                <Flex>
                    <InputFormatado valor={numero3}
                    onInput={ (e) => setNumero3(Number(+e.target.value))} 
                    label="Numero 3" 
                    tipo="number" />
                        <InputFormatado valor={numero4}
                    onInput={ (e) => setNumero4(Number(+e.target.value))} 
                    label="Numero 4" 
                    tipo="number" />
                </Flex>
            </Flex>
        </Pagina>
            
        
    );
}