import { useState } from "react";

export default function useStateValidado(valorInicial:any, funcaoValidacao:(valorInicial:any) => boolean) {
    
    const [valor,setValor] = useState<any>(valorInicial);
    const [validado, setValidado] = useState<any>(false);


    function setValorValidado(novoValor:any) {
        setValor(novoValor);
        setValidado(funcaoValidacao(novoValor));
    }

    return [valor,setValorValidado,validado];
}