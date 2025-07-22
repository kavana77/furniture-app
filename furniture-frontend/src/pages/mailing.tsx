import EmailForm from "../components/EmailForm";
import Text from "../components/ui/text";
import { subscribeToEmail } from "../utils/http";

const Mailing = () => {
    return ( 
        
        <div className="text-center space-y-6 p-12 my-6">
            <Text variant="heading" className="text-2xl">Join Our Mailing List </Text>
            <Text variant="muted" className="sm:text-xl  ">Sign up to receive inspiration, product updates, and special offers from our team.</Text>
            <EmailForm buttonText="Join now" onSubmit={subscribeToEmail}/>
        </div>
       
    );
}
 
export default Mailing;