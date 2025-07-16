import mongoose from "mongoose";

const mailingSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            }
        }
        
    }
},{
    timestamps: true
})
const Mailing = mongoose.model("Mailing", mailingSchema)
export default Mailing;
