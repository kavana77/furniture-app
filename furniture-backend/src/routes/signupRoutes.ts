import express from "express";
import { signUp,getData } from "../controllers/signupController";

const router = express.Router();

router.post("/signup", signUp)
router.get("/get",getData)

export default router