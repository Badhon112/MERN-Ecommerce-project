import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../model/userModel.js";
import JWT from "jsonwebtoken";

//For Rergister
const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer, role } = req.body;
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "password is Required" });
    }
    if (!phone) {
      return res.send({ message: "phone is Required" });
    }
    if (!address) {
      return res.send({ message: "address is Required" });
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
      answer,
      role,
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

//For Login POST
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //Check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not resistor",
      });
    }
    //Check Password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //Token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    //send data
    res.status(200).send({
      success: true,
      message: "Login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

//For Forget Password
const forgetPasswordController = async (req, res) => {
  try {
    const { email, answer, newpassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Email is require" });
    }
    if (!answer) {
      res.status(400).send({ message: "Answer is require" });
    }
    if (!newpassword) {
      res.status(400).send({ message: "New Password is require" });
    }

    //Check
    const user = await userModel.findOne({ email, answer });
    //Validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email or Answer",
      });
    }
    const hashed = await hashPassword(newpassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

//Text Controller
const textController = async (req, res) => {
  return res.status(200).send({
    success: true,
    message: "Protected Route",
  });
};

export {
  registerController,
  loginController,
  textController,
  forgetPasswordController,
};
