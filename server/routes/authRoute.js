import express from "express";
import {registerController,loginController,textController, forgetPasswordController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";

//Router Object
const router=express.Router()

// routing
//Register || Method -> POST
router.post("/register",registerController)

//Login || POST
router.post("/login",loginController)

//Forget Passowrtd
router.post("/forget-password",forgetPasswordController)

//Text Routers
router.get('/text', requireSignIn,isAdmin,textController)

//Protected User router
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})

//Protected Admin router
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})
export default router