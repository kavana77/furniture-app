export const subscribeToEmail = async (email: string)=>{
    const response = await fetch(
        "http://localhost:5000/api/signup", {
            method: "POST" ,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email})
        }
    )
    if(!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to subscribe")
    }
    return response.json()
}