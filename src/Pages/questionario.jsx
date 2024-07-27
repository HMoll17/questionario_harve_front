import "./Pages Style/questionario.css"
import { ListarQuestoes } from "../Components/listar_questoes"

function Questionário() {
    return(
        <section className="Questionario_Main">
            <h1>Questionario aqui</h1>
            <ListarQuestoes individual={false} />
        </section>
    )
}

export {Questionário}