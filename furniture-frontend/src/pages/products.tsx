import BrowserSection from "../components/BrowseSection";
import { Browse } from "../utils/constant";

const Products = () => {
    return ( <>
    <BrowserSection
    heading="Browse The Range"
    subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    categories={Browse}
    />
    </> );
}
 
export default Products;