import "./App.css";
import {CssBaseline} from "@mui/material";
import SearchAppBar from "./components/AppBar";
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tour from "./pages/Tour";

function App() {
    return (
        <BrowserRouter>
            <CssBaseline/>
            <SearchAppBar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/:id"} element={<Tour/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
