import { useState } from "react";
import { subscribeToEmail } from "../utils/http";

const useContact = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const handleSubscribe = async (email: string)=>{
        try {
            await subscribeToEmail(email)
            setSuccess(true)
            setError(false)
        } catch (error) {
            console.error("Error sending contact form", error);
            setSuccess(false)
            setError(true)
        }
    }
    return { success, error, handleSubscribe}
}
 
export default useContact;