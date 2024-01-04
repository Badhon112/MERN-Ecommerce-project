import productModel from "../model/productModel.js";
import fs from "fs";
import slugify from "slugify";

export const createProductController = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    //Validation check
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Require" });
      case !description:
        return res.status(500).send({ error: "Description is Require" });
      case !price:
        return res.status(500).send({ error: "Price is Require" });
      case !category:
        return res.status(500).send({ error: "Category is Require" });
      case !quantity:
        return res.status(500).send({ error: "Quantity is Require" });
      case !shipping:
        return res.status(500).send({ error: "Shipping is Require" });
      case !photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "Photo is Require and Should be less then 1mb" });
    }
    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Created Succefully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Product Controller",
    });
  }
};
