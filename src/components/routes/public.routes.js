import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sge from "../pages/public/sge/Sge"
import NovoUsuario from "../form/criarusuario/NovoUsuario"
import Ativacao from "../pages/ativacao/Ativacao"

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Sge />} />
                <Route exact path="/novousuario" element={<NovoUsuario />} />
                <Route exact path="/chaveativacao/:chave" element={<Ativacao />}/>
                <Route path="*" element={<Sge />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PublicRoutes