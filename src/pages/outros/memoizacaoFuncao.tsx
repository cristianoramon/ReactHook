import InputFormatado from "@/components/formulario/InputFormatado";
import BotaoMemoizado from "@/components/template/BotaoMemoizado";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useCallback, useState } from "react";

export default function MemoizacaoFuncao() {
    const [quantidade, setQuantidade] = useState(0);

    const finalizar = useCallback( function(e) {
        e.preventDefault();
        window.alert("Compra realizada com sucesso!");
        setQuantidade(0);
    },[]);
    return (
        <Pagina titulo="Memoização de Funções" subtitulo="Entendoo hook useCallback">
            <Display texto="Quantos produtos voce quer?"/>
            <form>

                <Flex col center>
                    <InputFormatado valor={quantidade} tipo="number"
                      onInput={(e) => setQuantidade(+e.currentTarget.value)}></InputFormatado>
                    <BotaoMemoizado texto="Confimar" onClick={finalizar}></BotaoMemoizado>
                </Flex>
            </form>
        </Pagina>
    )
}