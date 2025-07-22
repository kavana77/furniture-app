import HeroSection from "../components/HeroSection";

import { Hero } from "../assets/images";
import FeatureSection from "./featureSection";
import Gallery from "./gallery";
import Doctors from "./doctors";
import Products from "./products";
import Services from "./services";
const Home = () => {
    return ( 
        <>
   <HeroSection
  tagline="New Arrival"
  title="Discover Our New Collection"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
  buttonText="Buy Now"
  imageSrc={Hero}
  onButtonClick={() => alert("Clicked!")}
/>
<FeatureSection/>
<Gallery/>
<Doctors/>
<Products/>
<Services/>
</>
     );
}
 
export default Home;