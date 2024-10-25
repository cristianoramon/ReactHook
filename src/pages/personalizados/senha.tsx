import InputFormatado from "@/components/template/InputFormatado";
import Pagina from "@/components/template/Pagina";
import useStateValidado from "@/data/hooks/useStateValidado";

export default function Senha() {
     

    function validarSenha(senha: string) {
        let correspondencia = senha.match(/[d\S]{8,}/);

        console.log(correspondencia); 
        return correspondencia?.[0].length === senha.length;
    }

    const [senha,setsenha,senhaEhValida] = useStateValidado("",validarSenha);

    let borda;

    if (senha===""){
        borda = "border-none";
    }else if (senhaEhValida){
        borda = "border-green-600";
    }else if (!senhaEhValida){
        borda = "border-red-600";
    }
    return (
        <Pagina titulo="Validando Senha" subtitulo="Usando o hook personalizado">
            <InputFormatado label="Senha" tipo="text" className={` ${borda} border-4 w-10 flex`} 
            valor= {senha} 
            onInput={(e)=> setsenha(e.currentTarget.value)}    />
        </Pagina>
    );
}