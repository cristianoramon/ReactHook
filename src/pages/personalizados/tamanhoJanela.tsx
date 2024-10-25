import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import useTamanhoJanela from "@/data/hooks/useTamanhoJanela";

export default function TamanhoJanela() {
    const tamanho = useTamanhoJanela();
    return (
        <Pagina titulo="Tamanho da Janela" subtitulo="Usando o hook personalizado">
            <Display texto={tamanho}/>
            <div
            className={` w-40 h-40 sm:bg-blue-400 md:bg-pink-400 lg:bg-green-400 xl:bg-pur-400 2xl:bg-orange-400 `}
            >

            </div>
        </Pagina>
    )
}