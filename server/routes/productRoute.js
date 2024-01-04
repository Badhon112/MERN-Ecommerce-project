import express from 'express'
import {requireSignIn,isAdmin} from '../middlewares/authMiddlewares.js'
import {  createProductController } from '../controllers/productController.js';
import formdable from 'express-formidable'


const router=express.Router();

router.post("/create-product",requireSignIn,isAdmin,formdable(),createProductController)

export default router;