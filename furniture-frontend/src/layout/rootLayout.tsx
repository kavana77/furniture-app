import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navLinks } from "../utils/navLinks";
import Footer from "../components/Footer";
import Mailing from "../pages/mailing";

export default function RootLayout(){
    return (
        <div>
            <Navbar logoText="Furniture" links={navLinks}/>
            <main>
                <Outlet/>
            </main>
            <Mailing/>
            <Footer/>
        </div>
    )
}