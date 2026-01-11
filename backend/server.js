import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import productRouter from "./routes/product.routes.js";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/productstore", productRouter);

app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server started at http://localhost:${PORT}`);
});
