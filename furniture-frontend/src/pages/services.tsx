import HowItWorks from "../components/HowItWorks";
import { StepsData } from "../utils/constant";

const Services = () => {
    return ( <>
        <HowItWorks
        heading="How It Works"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        steps={StepsData}
        />
    </> );
}
 
export default Services;