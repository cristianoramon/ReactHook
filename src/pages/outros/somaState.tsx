import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";



export default function somaState(){
    
    const [numero1, setNumero1] = useState(1);
    const [numero2, setNumero2] = useState(1);

    const [validadeN1,setValidadeN1] = useState(false);
    const [validadeN2,setValidadeN2] = useState(false);

    const [soma, setSoma] = useState(-999);
    
    function somaNumero(){

        if (validadeN1 && validadeN2){

            setSoma(numero1 + numero2);
        } else {
            
            setSoma(-999);
        }
    }

    useEffect(() => {   
        setValidadeN1(numero1>0)         

    },[numero1]);

    useEffect(() => {   
        setValidadeN2(numero2>0)         

    },[numero2]);


    return (    
        <Pagina titulo="Soma com useState" subtitulo="Soma de dois números">
            <Flex col centerCross>
                <Display texto={"Faca uma soma"}/>
                <Flex>
                    <InputFormatado tipo="number" onInput={(e) => setNumero1(+e.currentTarget.value)} valor={numero1}/>
                    <span className="text-3xl ml-2">+</span>
                    <InputFormatado tipo="number" onInput={(e) =>setNumero2(+e.currentTarget.value)} valor={numero2}/>
                    <Botao cor="bg-green-400" texto="=" onClick={(e) => {somaNumero()}}/>
                    <Display texto={soma}/>
                </Flex>
            </Flex>
        </Pagina>
    )
}