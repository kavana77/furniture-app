import Beautify from "../components/Beautify";
import { BeautifyImg } from "../assets/images";

const Doctors = () => {
    return ( <>
        <Beautify 
        title="Beautify Your Space"
        description="Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        buttonText="LEARN MORE"
        imageSrc={BeautifyImg}
        imageAlt="Woman wearing hat looking aside"
        />
    </> );
}
 
export default Doctors;