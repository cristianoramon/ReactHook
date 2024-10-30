import { IconAppWindow, IconArrowsLeftRight, IconDimensions, IconFishHook, IconLetterCase, IconLock, IconMathGreater, IconRefreshAlert, IconSection, IconShoppingCart, IconUser } from "@tabler/icons-react";

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

export default secoes;
