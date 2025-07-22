import { createBrowserRouter, createRoutesFromElements,
    Route
 } from "react-router-dom";
import Home from "./pages/home";
import RootLayout from "./layout/rootLayout";
import Services from "./pages/services";
import Doctors from "./pages/doctors";
import Products from "./pages/products";
import Gallery from "./pages/gallery";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>} />
            <Route path="services" element={<Services/>} />
            <Route path="doctors" element={<Doctors/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="gallery" element={<Gallery/>}/>
        </Route>
    )
)
