import "dotenv/config"
import {cleanEnv} from "envalid"
import {port, str} from "envalid/dist/validators"


export default cleanEnv(process.env, {
    MONGODB_URI: str(),
    PORT: port(),
    EMAIL_USER: str(),
    EMAIL_PASS: str()
})