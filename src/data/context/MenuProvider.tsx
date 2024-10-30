import React, { use, useEffect, useState } from "react";
import secoesMenu from "../constantes/seccoesMenu";
import useMenu from "../hooks/useMenu";
import useTamanhoJanela from "../hooks/useTamanhoJanela";
import useBoolean from "../hooks/useBoolean";
import { useRouter } from "next/router";
import { MenuSecao } from "../models/MenuSecao";

const ContextoMenu = React.createContext({});

export function MenuProvider(props: any) {      

    // const ativo = url === router.asPath;
    console.log("MENU",secoesMenu);
    const [mini,toggleMini, miniTrue, miniFalse] = useBoolean(false);
    const [secoes, setSecoes] = useState<any>(secoesMenu);
    console.log("seccoes",secoesMenu);
    let tamanho = useTamanhoJanela();
    const router = useRouter();

    useEffect(() => {

        if (tamanho ==="md" || tamanho==="sm") {
            miniTrue();
        }
        
    },[tamanho]);

    useEffect(() => {       
        setSecoes(() => selecionarItem(router.asPath));
        //selecionarItem(router.asPath);
        console.log('secoes',secoes);
    },[router.asPath]);

    function alternarSecao(secaoSelecionada: MenuSecao) {
        let novaSecoes = secoes.map((secao) => {
            if (secao.titulo === secaoSelecionada.titulo) {
                return {
                    ...secao,
                    aberta: !secao.aberta
                }
            } else {
                return  secao;                  
                
            }
            
        });

        setSecoes(novaSecoes);
    
    }

    function selecionarItem(url: string) {
        let novasSecoes = secoesMenu.map((secao: any) => {
            let novosItens = secao.itens.map((item: any) => {
               return {...item, selecionado: item.url === url}
            })
            console.log('secao',secao);
            console.log('novosItens',novosItens);
            return {...secao,itens:novosItens};
        });
        console.log('novasSecoes',novasSecoes);
        return novasSecoes;       
    }
    
    return (
        <ContextoMenu.Provider value={{ secoes,mini,toggleMini,alternarSecao }}>
            {props.children}
        </ContextoMenu.Provider>
    )
}
export default ContextoMenu;