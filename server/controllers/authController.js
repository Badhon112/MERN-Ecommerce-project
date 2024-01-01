import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../model/userModel.js";

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, role } = req.body;
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!password) {
      return res.send({ error: "password is Required" });
    }
    if (!phone) {
      return res.send({ error: "phone is Required" });
    }
    if (!address) {
      return res.send({ error: "address is Required" });
    }

    //Check user
    const existingUser = await userModel.findOne({ email });
    //Existing User
    if (existingUser) {
      return (
        res.status(200),
        send({
          success: true,
          message: "Already Register plz try again",
        })
      );
    }

    //Register user
    const hashedpassword = await hashPassword(password);
    //save
    const user = new userModel({
      name,
      email,
      password: hashedpassword,
      phone,
      address,
    });
    user.save();
    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

export { registerController };
