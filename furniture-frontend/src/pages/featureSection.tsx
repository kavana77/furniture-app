import { Headphones, ShieldCheck, Truck } from "lucide-react";
import FeatureItem from "../components/FeatureItem";

const FeatureSection = () => {
    return ( 
        <section className="flex justify-evenly bg-gray-100 p-4">
            <FeatureItem
            icon={<Truck/>}
            title="Free Delivery"
            description="Lorem ipsum dotor sit amet."
            />
            <FeatureItem
            icon={<Headphones/>}
            title="Support 24/7"
            description="Lorem ipsum dotor sit amet."
            />
            <FeatureItem
            icon={<ShieldCheck/>}
            title="100% Authentic"
            description="Lorem ipsum dotor sit amet."
            />
        </section>
     );
}
 
export default FeatureSection;