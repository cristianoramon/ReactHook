import Display from "@/components/template/Display";
import Pagina  from "../../components/template/Pagina";
import Flex from "@/components/template/Flex";
import Botao from "@/components/template/Botao";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function Contador() {
    const [count,setCount] = useState(0);
    return (
        <Pagina titulo="Contador" subtitulo="Contagem regressiva">
            
            <Display texto={count}/>
            <Flex gap={5}>
                <Botao 
                  redondo
                  icone={<IconMinus size={40}/>}
                  tamanho="2xl"
                  cor="bg-blue-500"
                  onClick={() => setCount(count-1)}
                />
                 <Botao 
                    redondo
                    texto="0"
                    tamanho="2xl"
                    cor="bg-blue-500"
                    onClick={() => setCount(0)}
                />
                
                <Botao 
                redondo
                icone={<IconPlus size={40}/>}
                tamanho="2xl"
                cor="bg-green-500"
                onClick={() => setCount((count+1))}
                />
               
            </Flex>
        </Pagina>
    )
}