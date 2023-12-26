import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/private/home/Home"
import { useContext } from "react"
import { Context } from "../context/AuthContext"

const PrivateRoutes = () => {

    const {auth} = useContext(Context)



    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/home" element={<Home />}/>
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PrivateRoutes