import { IconAppWindow, IconArrowsLeftRight, IconColorSwatch, IconDatabase, IconDimensions, IconFishHook, IconForms, IconLetterCase, IconLock, IconMathGreater, IconPin, IconRefreshAlert, IconSection, IconShoppingCart, IconTextColor, IconUser } from "@tabler/icons-react";

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
        aberta: false,
        itens: [{titulo: "Modal", url: "/personalizados/modal", tag:"peronalizado",icone: <IconAppWindow />},
                {titulo: "Tamanho Janela", url: "/personalizados/tamanhoJanela", tag:"peronalizado",icone: <IconDimensions />},         
                {titulo: "Validando senha", url: "/personalizados/senha", tag:"peronalizado",icone: <IconLock />},           

            ],      

    },
    {
        titulo: "Contexto",
        aberta: false,
        itens: [{titulo: "Loja", url: "/contexto/loja", tag:"useContext",icone: <IconShoppingCart />},                   
            ],      

    },
    {
        titulo: "Outros",
        aberta: true,
        itens: [{titulo: "Memoizando", url: "/outros/memoizacao", tag:"useMemo",icone: <IconPin />}, 
                {titulo: "Memoizando funções", url: "/outros/memoizacaoFuncao", tag:"useCallback",icone: <IconPin />},
                {titulo: "Formalario 1", url: "/outros/formularioImperativeHandle", tag:"useImperativeHandle",icone: <IconForms/>},
                {titulo: "Texto Secreto ", url: "/outros/texto", tag:"useLayoutEffect",icone: <IconTextColor/>},
                {titulo: "Gerador de cor ", url: "/outros/geradorDeCor", tag:"useLayoutEffect",icone: <IconColorSwatch/>},
                {titulo: "Soma com useState ", url: "/outros/somaState", tag:"useState",icone: <IconDatabase/>},
                {titulo: "Soma com useReduncer ", url: "/outros/somaReduncer", tag:"useReducer",icone: <IconDatabase/>},
                {titulo: "Formalario 1 ", url: "/outros/formularioId", tag:"use ID",icone: <IconForms/>},
                {titulo: "Formalario 2 ", url: "/outros/formularioid2", tag:"use ID",icone: <IconForms/>},
        ],      

    },
    

];

export default secoes;
