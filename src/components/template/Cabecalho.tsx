import Flex from "./Flex";
import Titulo from "./Titulo";
import SelectorDeCor from "./SelectorDeCor";
import useToggle from "@/data/hooks/useToggle";
import { IconPaint, IconX } from "@tabler/icons-react";

interface CabecalhoProps {
    titulo?: string;
    subtitulo?: string;
}

export default function Cabecalho(props: CabecalhoProps) {

    const [mostraSelector, setMostraSelector] = useToggle(false);
    return (
        <Flex centerCross className="justify-between">
            {props.titulo ? <Titulo titulo={props.titulo} subtitulo={props.subtitulo} /> :<div></div> }
            <div onClick={setMostraSelector}>
                {mostraSelector ? <IconX/>:<IconPaint/>}
            </div>
            {mostraSelector? <SelectorDeCor />:""}
        </Flex>
    );
}
