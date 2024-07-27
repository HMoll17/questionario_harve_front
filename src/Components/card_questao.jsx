import "./Components Style/card_questao.css"
import { useState, useEffect } from "react"
import { apiBack } from "../Conexoes/api_back"

function CardQuestao(props) {
    const [listaAlternativas, setListaAlternativas] = useState([])
    const ID_QUESTAO = props.questao.id
    const DESCRICAO_QUESTAO = props.questao.descricao

    useEffect(() => {
        pegarAlternativas(ID_QUESTAO)
    })

    async function pegarAlternativas(id_pergunta) {
        try {
            const dados = await apiBack.get(`questionario/alternativas/${id_pergunta}`)
            setListaAlternativas(dados.data)
        } catch (error) {
            alert("Erro ao pegar as alternativas")
        }
    }

    return(
        <section className="Card_Questao_Main">
            <section className="Pergunta">
                <button onClick={() => console.log(listaAlternativas)}>Teste</button>
                <p>{DESCRICAO_QUESTAO}</p>
            </section>
            <section className="Alternativas">
                <form>
                    {listaAlternativas.length > 0 ? (
                        listaAlternativas.map((alternativa, index) => {
                            return(
                                <div key={index} className="Opcao">
                                    <input type="radio" name={ID_QUESTAO} id={alternativa.id}/>
                                    <label htmlFor={ID_QUESTAO}>{`${alternativa.descricao}, ${alternativa.pontos}`}</label>
                                </div>
                            )
                        })
                    ) : (<p>Alternativas não carregaram</p>)}
                    
                </form>
            </section>
        </section>
    )
}

export {CardQuestao}