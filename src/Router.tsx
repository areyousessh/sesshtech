import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {About} from "./pages/About"
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Setup } from "./pages/Setup";

export function Router() {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="projects" element={<Projects/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="setup" element={<Setup/>} />
        </Routes>
    )
}