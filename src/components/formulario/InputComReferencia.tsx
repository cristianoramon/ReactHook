import { forwardRef, useImperativeHandle, useRef } from "react";

interface InputFormatadoProps {
    label?: string;
    tipo: string;   
    onInput?: (e: any) => any;
    className?: string,
    ref:any

}

function InputComReferencia(props: InputFormatadoProps,ref) {

    const refenciaInterna = useRef<any>();

    function novaFuncionalidade(){

        return {
            apagar : function() {
                refenciaInterna.current.value = refenciaInterna.current.value.slice(0,-1);

            },
            textoPadrao : function(){
                refenciaInterna.current.value = "Padrao";
            }
        }

    }

    useImperativeHandle(ref,novaFuncionalidade);
    return (
        <>
            <label className="m-1">{props.label}</label>
            <input
            ref={refenciaInterna}
                type={props.tipo}                
                onInput={props.onInput}
                className={`
                    text-gray-600 px-2 
                    w-40 h-11 rounded-md
                    ${props.className ?? ''}
                `}
            />
        </>
    );
}
export default forwardRef(InputComReferencia);