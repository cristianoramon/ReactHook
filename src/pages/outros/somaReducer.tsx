import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { Reducer, useEffect, useReducer, useState } from "react";

function mudaDados(estadoAtual,acao){

    switch(acao.type){
        case "ALTERA_N1":           
                return {...estadoAtual,
                         numero1: acao.payload,
                       validadeN1: acao.payload>0, 
            };
            case "ALTERA_N2":           
                return {...estadoAtual,
                        numero2: acao.payload,
                        validadeN2: acao.payload>0, 
            };
            case "SOMA":     
              if (estadoAtual.validadeN1 && estadoAtual.validadeN2){
                let soma = estadoAtual.numero1 + estadoAtual.numero2;
                return {...estadoAtual,
                         soma: soma, 
                        };
              }else{
                return {...estadoAtual,
                         soma: -999, 
                        };
              }
            }      
            
     
     
 
}

export default function somaReducer(){
    
    const [dados,dispatchDados]      = useReducer<Reducer<any,any>>(mudaDados, { numero1: 0, 
                                                                            numero2: 0,
                                                                            validadeN1: false,
                                                                            validadeN2: false,
                                                                            soma: -999});  


    return (    
        <Pagina titulo="Soma com useState" subtitulo="Soma de dois números">
            <Flex col centerCross>
                <Display texto={"Faca uma soma"}/>
                <Flex>
                    <InputFormatado tipo="number" onInput={(e) =>dispatchDados({type:"ALTERA_N1",payload: +e.currentTarget.value})} valor={dados.numero1}/>
                    <span className="text-3xl ml-2">+</span>
                    <InputFormatado tipo="number" onInput={(e) =>dispatchDados({type:"ALTERA_N2",payload: +e.currentTarget.value})} valor={dados.numero2}/>
                    <Botao cor="bg-green-400" texto="=" onClick={(e) => {dispatchDados({type:"SOMA"}})}}/>
                    <Display texto={dados.soma}/>
                </Flex>
            </Flex>
        </Pagina>
    )
}