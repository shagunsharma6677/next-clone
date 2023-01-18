import { Routes, Route } from "react-router-dom"
import Mac from "../Mac/Mac"
import Home from "../Home/Home"
export default function AllRoutes() {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mac" element={<Mac />} />
            {/* <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} /> */}


        </Routes>
    </>
}