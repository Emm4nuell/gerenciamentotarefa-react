import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import NovoUsuario from "../form/criarusuario/NovoUsuario"

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/novousuario" element={<NovoUsuario />} />
                <Route path="*" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PublicRoutes