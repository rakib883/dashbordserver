import express from "express";
import dotenv from "dotenv";
import user from "./router/userRouter.js";
import cors from "cors"
// import { connect } from "./config/dbConfig.js";
// Load environment variables from the .env file
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());
const port = process.env.PORT || 3000;


// databse conect area here start
// connect()

app.use("/api",user)

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/test",(req,res)=>{
   res.send({message:"okk"})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
