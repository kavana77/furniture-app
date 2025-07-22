import { useState } from "react";
import Button from "./ui/button";
import Input from "./ui/input";

type EmailFormProps = {
    label?:string
    id?: string
    placeholder?:string
    buttonText?: string
    onSubmit?:(email:string) => Promise<void>
}

const EmailForm = ({label,id,placeholder, buttonText, onSubmit}: EmailFormProps) => {
    const [email, setEmail] = useState("")
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if(!email.includes("@")){
            alert("Please enter a valid email")
            return
        }
        try {
            if(onSubmit){
                await onSubmit(email)
            }else{
                console.log("No onSubmit handler provided.")
            }
            setEmail("")
        } catch (error) {
            alert(error || "Subscription failed")
        }
    }
    return ( 
        <form onSubmit={handleSubmit} className="w-70 md:w-86 mx-auto flex sm:flex-row gap-4 items-center justify-center border rounded-2xl overflow-hidden">
            <Input
            label={label || ""}
            id={id ||"email"}
            placeholder={placeholder || "example@gmail.com"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none"
            />
            <Button className="p-4 bg-[#06476a] rounded-l-none md:px-12" >{buttonText }</Button>
        </form>
     );
}
 
export default EmailForm;