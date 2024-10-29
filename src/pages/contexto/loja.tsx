import AdicionarProduto from "@/components/loja/AdicionarProduto";
import Carrinho from "@/components/loja/Carrinho";
import FinalizarCompra from "@/components/loja/FinalizarCompra";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { createContext, useState } from "react";



export let Contexto = createContext({} as any);
export default function Loja() {
    const[carrinho, setCarrinho] = useState<any>([])
    const ctx = {
        carrinho,
        setCarrinho,
        total(){
            const r =  carrinho.reduce((acc, produto) => acc + +produto.preco, 0);
            return  r;
        }
    }
    return (

        <Contexto.Provider value={ctx} >
            <Pagina titulo="Loja" 
                        subtitulo="Compartilhando  informações entre multiplos componentes">
                <Flex col gap={4}>
                        <Flex col gap={4}>
                            <AdicionarProduto/>
                            <FinalizarCompra />
                            <Carrinho/>
                        </Flex>  
                    </Flex>           
                </Pagina>
        </Contexto.Provider>
    );
}   
