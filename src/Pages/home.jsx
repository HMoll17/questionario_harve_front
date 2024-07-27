import "./Pages Style/Home.css"
import { useState, useEffect } from "react"
import { apiBack } from "../Conexoes/api_back"

function Home() {
    // let [dados, setDados] = useState()
    // let [nome, setNome] = useState()

    // useEffect(() => {
    //     if (dados){
    //         setNome(dados.nome)
    //         console.log(dados.nome)
    //         console.log(dados.email)
    //     }
    // }, [dados])

    // async function teste(){
    //     try {
    //         const resposta = await apiBack.get("/admin/usuario/3")
    //         setDados(resposta.data[0])
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return(
        <section className="Home_Main">
            <h1>Questionário</h1>
            {/* <h1>Bem vindo {nome}</h1> */}
            <p>Responda ao questionário e veja sua pontuação</p>
            <form action="./questionario/">
                <input type="text" name="nome_usuario" id="nome_usuario" placeholder="Nome" />
                <input type="email" name="email_usuario" id="email_usuario" placeholder="Email" />
                <button type="submit">Começar questionario</button>
            </form>
            {/* <button onClick={() => {teste()}}>Teste</button> */}
        </section>
    )
}

export {Home}