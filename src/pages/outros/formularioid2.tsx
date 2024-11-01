import Inputcomid from "@/components/template/inputcomid";
import Pagina from "@/components/template/Pagina";

export default function FormularioId2() { 
    return (
        <Pagina titulo="Usando o hook useId em um componente" subtitulo=" usando hook ID">
            <Inputcomid label="Nome"/>
            <Inputcomid label="sobre Nome"/>
        </Pagina>
    );
}
