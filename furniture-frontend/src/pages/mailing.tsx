import EmailForm from "../components/EmailForm";
import Text from "../components/ui/text";
import useContact from "../hooks/useContact";

const Mailing = () => {
    const {success, error, handleSubscribe} = useContact()
    return ( 
        
        <div className="text-center space-y-6 p-12 my-6">
            <Text variant="heading" className="text-2xl">Join Our Mailing List </Text>
            <Text variant="muted" className="sm:text-xl  ">Sign up to receive inspiration, product updates, and special offers from our team.</Text>
            <EmailForm buttonText="Join now" onSubmit={handleSubscribe}/>
            {success && <p className="text-green-600 font-medium">Successfully subscribed.!</p>}
            {error && <p className="text-red-600">Something went wront...</p>}
        </div>
       
    );
}
 
export default Mailing;