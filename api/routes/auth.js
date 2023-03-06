
import express from "express"
import { login, register } from "../controllers/auth.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router=express.Router();

router.post("/register",register)
// router.get("/login/:id",verifyAdmin,(req,res)=>{
//     console.log("login runs")
//     res.send(req.user);
// })
router.post("/login",login);
export default router;