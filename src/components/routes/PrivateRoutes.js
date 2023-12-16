import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"

const PrivateRoutes = () => {
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