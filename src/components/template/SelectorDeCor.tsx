import useTema from "@/data/hooks/useTema";
import Botao from "./Botao";
import Flex from "./Flex";

export default function SelectorDeCor() {
    
    let {cores,setCorDestaque}= useTema();

    let listaCores = cores.map((cor) => <Botao key={cor} cor={`bg-${cor} `} onClick={()=>{setCorDestaque(cor)}}/>);  
    return (
        <Flex center className="{ `absolute right-2 top-3`}">
            {listaCores}
        </Flex>
       )
    };
