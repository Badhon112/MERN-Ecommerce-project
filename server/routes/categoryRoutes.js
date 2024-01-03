import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import {
    categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategory,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();
//Routes

//Create Catogory
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//Update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//Get All Category
router.get("/get-category",categoryController)

//Get Single Category
router.get("/single-category/:slug",singleCategory)

//Delete Single Category
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController)
export default router;
