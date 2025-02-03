import bcrypt from 'bcrypt';
import user from '../model/user.js';
import generateToken from '../config/token.js';
const saltRounds = 10;

// const checkEmail = (email) => {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// };

// const hashPassword = async (password) => {
//   const hash = await bcrypt.hash(password, saltRounds);
//   return hash;
// };

const register = async (req, res) => {
  // const userData = req.body;
  // const { firstName, lastName, email, password, confarmPassword } = userData;

  // // Check for required fields
  // if (!firstName || !lastName || !email || !password || !confarmPassword) {
  //   return res.status(400).send({ status: "false", message: "All fields are required" });
  // }

  // // Validate email format
  // const emailCheck = checkEmail(email);
  // if (!emailCheck) {
  //   return res.status(400).send({ status: "false", message: "Email is not valid" });
  // }

  // // Check if passwords match
  // if (password !== confarmPassword) {
  //   return res.status(400).send({ status: "false", message: "Password and Confirm Password must be the same" });
  // }

  // // Hash password
  // const hashedPassword = await hashPassword(password);

  // try {
  //   // Check if user already exists
  //   const existingUser = await user.findOne({ email });
  //   if (existingUser) {
  //     return res.status(400).send({ status: "false", message: "User already exists" });
  //   }

  //   // Create new user and save to database
  //   const newUser = new user({ firstName, lastName, email, password: hashedPassword });
  //   await newUser.save();

  //   const token = generateToken(newUser)

  //   return res.status(201).send({ status: "true", message: "User registered successfully",token });
  // } catch (error) {
  //   console.error(error);
  //   return res.status(500).send({ status: "false", message: "Internal server error" });
  // }
};

export default register;
