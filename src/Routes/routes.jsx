import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/home";
import { Questionário } from "../Pages/questionario";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/questionario/" element={<Questionário />} />
                {/* <Route path="/teste/" element={<CardQuestao />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export {Rotas}