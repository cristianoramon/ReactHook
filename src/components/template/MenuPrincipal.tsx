import { IconMenu, IconX } from "@tabler/icons";
import { MenuItem } from "../../data/models/MenuItem";
import { MenuSecao } from "../../data/models/MenuSecao";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import MenuPrincipalSecao from "./MenuPrincipalSecao";
import Flex from "./Flex";
import { IconAppWindow, IconArrowsLeftRight, IconDimensions, IconFishHook, IconLetterCase, IconLock, IconMathGreater, IconRefreshAlert, IconSection, IconShoppingCart, IconUser } from "@tabler/icons-react";
import useToggle from "@/data/hooks/useToggle";
import { use, useEffect } from "react";
import useTamanhoJanela from "@/data/hooks/useTamanhoJanela";
import useBoolean from "@/data/hooks/useBoolean";

export default function MenuPrincipal() {
    const secoes = [
        {
            titulo: "Essenciais",
            aberta: false,
            itens: [{titulo: "Contador", url: "/essenciais/contador", tag:"useState",icone: <IconFishHook />},
                    {titulo: "Votacao", url: "/essenciais/votacao", tag:"useState",icone: <IconUser />},
                    {titulo: "Consulta Api", url: "/essenciais/consultaAPI", tag:"useEffect",icone: <IconArrowsLeftRight />},
                    {titulo: "Maior", url: "/essenciais/maior", tag:"useEffect",icone: <IconMathGreater />},
                    {titulo: "Contagem Caracteres", url: "/essenciais/contagemCaracteres", tag:"useEffect",icone: <IconLetterCase />},
                    {titulo: "State Vs Referencia", url: "/essenciais/stateVsRef", tag:"useRef",icone: <IconRefreshAlert />}, 
                    {titulo: "Referenciando elemento", url: "/essenciais/refElemento", tag:"useRef",icone: <IconSection />},  
                    {titulo: "Contagem Caracteres", url: "/essenciais/contagemCaracteresRef", tag:"useRef",icone: <IconLetterCase />},    
                ],      

        },
        {
            titulo: "Personalizados",
            aberta: true,
            itens: [{titulo: "Modal", url: "/personalizados/modal", tag:"peronalizado",icone: <IconAppWindow />},
                    {titulo: "Tamanho Janela", url: "/personalizados/tamanhoJanela", tag:"peronalizado",icone: <IconDimensions />},         
                    {titulo: "Validando senha", url: "/personalizados/senha", tag:"peronalizado",icone: <IconLock />},           

                ],      

        },
        {
            titulo: "Contexto",
            aberta: true,
            itens: [{titulo: "Loja", url: "/contexto/loja", tag:"useContext",icone: <IconShoppingCart />},                   
                ],      

        },

    ];
    const [mini,toggleMini, miniTrue, miniFalse] = useBoolean(false);
    let tamanho = useTamanhoJanela();

    useEffect(() => {

        if (tamanho ==="md" || tamanho==="sm") {
            miniTrue();

        }
        
    },[tamanho]);
    function renderizarSecoes() {
        return secoes.map((secao: MenuSecao) => (
            <MenuPrincipalSecao key={secao.titulo} titulo={secao.titulo} mini={mini} aberta={secao.aberta}>
                {renderizarItens(secao)}
            </MenuPrincipalSecao>
        ));
    }

    function renderizarItens(secao: MenuSecao) {
        return secao.itens.map((item: MenuItem) => (
            <MenuPrincipalItem
                key={`${item.titulo}-${item.tag}`}
                icone={item.icone}
                titulo={item.titulo}
                tag={item.tag}
                url={item.url}
                mini={mini}
            />
        ));
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo />}
                <div className="cursor-pointer" onClick={toggleMini}>
                    {mini ? <IconMenu /> : <IconX />    }
                </div>

            </Flex>
            <nav className="flex flex-col gap-4 m-7">{renderizarSecoes()}</nav>
        </aside>
    );
}
