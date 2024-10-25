import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import useToggle from "@/data/hooks/useToggle";
import { IconX } from "@tabler/icons-react";

export default function Model() {
    const [mostrar,toggleMostrar] = useToggle(false);
    return (
        <Pagina titulo="model" 
                subtitulo="Usando hook personalizado para abrir e fechar um modal    ">
            <Botao cor="bg-green-500" 
            texto="Abrir"
            tamanho="2xl"
            onClick={toggleMostrar}/>

            {mostrar ? ( 
                        <Flex col className={`
                                w-80 h-80 bg-gray-500
                                text-white
                                text-xl
                                p-4m-4
                                rounded-md`} >
                            <Botao cor="bg-red-500" tamanho="xl"  icone={<IconX />} onClick={toggleMostrar}/>
                            <h1 className="mt-5"> Clique no X para sair</h1>
                        </Flex>
                        ):""}
       
           
        </Pagina>
    );
}