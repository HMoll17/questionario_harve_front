import { CardQuestao } from "./card_questao";
import { useState, useEffect } from "react";
import { apiBack } from "../Conexoes/api_back";

function ListarQuestoes(params) {
    const [listaPerguntas, setListaPerguntas] = useState([])

    useEffect(() => {
        pegarPerguntas()
    }, [])

    async function pegarPerguntas() {
        try {
            const dados = await apiBack.get("questionario/perguntas")
            setListaPerguntas(dados.data)
        } catch (error) {
            alert("Erro ao pegar as questões")
        }
    }

    if (params.individual){
        return(
            <section className="Listar_Uma">
                <CardQuestao />
            </section>
        )
    }else{
        return(
            <section className="Listar__Todas">
                {listaPerguntas.length > 0 ? (
                    listaPerguntas.map((pergunta, index) => {
                        return(
                            <CardQuestao key = {index} questao = {pergunta} />
                        )
                    })
                ) : (<p>Perguntas não carregaram</p>)}
            </section>
        )
    }
}

export {ListarQuestoes}