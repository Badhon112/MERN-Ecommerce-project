import express from "express";
import {registerController,loginController} from '../controllers/authController.js'

//Router Object
const router=express.Router()

// routing
//Register || Method -> POST
router.post("/register",registerController)

//Login || POST
router.post("/login",loginController)


export default router