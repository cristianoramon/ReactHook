import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useId } from "react";
export default function FormularioId() {    
    let id = useId();

    return ( <Pagina titulo="Conhecendo o hook useId" subtitulo="usando hook ID">
                <Flex center>
                    <label  className="m-1" htmlFor={`nome-${id}`}> nome : </label>
                    <input  className=" m-2 text-gray-600 p-2 rounded-md"  id={`nome-${id}`} type="text" />
                </Flex>
                <Flex center>
                    <label  className="m-1" htmlFor={`sobrenome-${id}`}> Sobre Nome : </label>
                    <input  className=" m-2 text-gray-600 p-2 rounded-md"  id={`sobrenome-${id}`} type="text" />
                </Flex>
             </Pagina> 
        );
    }