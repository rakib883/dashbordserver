import express from "express";
import dotenv from "dotenv";
import user from "./router/userRouter.js";
import cors from "cors";
import { connect } from "./config/dbConfig.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to database
connect();

app.use("/api", user);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send({ message: "OKK" });
});

// ✅ Instead of app.listen(), export the handler
export default app;
