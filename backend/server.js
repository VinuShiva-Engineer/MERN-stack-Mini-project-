import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import productRouter from "./routes/product.routes.js";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// APIs FIRST
app.use("/productstore", productRouter);

if (process.env.NODE_ENV==="production"){
    const buildPath = path.resolve("frontend","dist")
    app.use(express.static(buildPath))
    app.use((req,res)=>{
        res.sendFile(path.join(buildPath,"index.html"))
    })
}


const startServer = async () => {
  try {
    await connectDb();
    console.log("MongoDb connected successfully");

    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed ❌", error);
    process.exit(1);
  }
};

startServer();