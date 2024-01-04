import express from "express";
// import colors from 'colors'
import dotenv from "dotenv";
import morgan from "morgan";
import ConnectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoute.js";
import cors from "cors";
// config Env
dotenv.config();

//databse config
ConnectDB();

// rest object
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest Api
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`.bgCyan.white);
});
