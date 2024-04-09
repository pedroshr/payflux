import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ReceivedPage from "../pages/received/ReceivedPage";
import OutflowPage from "../pages/outflow/OutflowPage";

export default function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/received' element={<ReceivedPage />} />
                <Route path='/outflow' element={<OutflowPage />} />
            </Routes>
        </BrowserRouter>
    )
}