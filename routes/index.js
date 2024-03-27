import express from "express";
import { Login, Register, getUsers } from "../controller/Users.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/register", Register);
router.post("/login", Login);

export default router;
