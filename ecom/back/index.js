// const express=require("express");
// const port =4000;
// const app=express();
// const mongoose=require("mongoose");
// const multer=require("multer");
// const path=require("path");
// const cors=require("cors");


// app.use(express.json());
// app.use(cors());

// //Database connection with mongodb
// mongoose.connect("mongodb+srv://rahul:rahul@cluster0.cvofe.mongodb.net/E-commerce");

// //API Creation

// app.get("/",(req,res)=>{
//     res.send("express app is running");
// })

// //Image Storage Engine

// const storage=multer.diskStorage({
//   destination:'./upload/images',
//   filename:(req,file,cb)=>{
//     return cb(null,${file.fieldname}_${Date.now()}${path.extname(file.originalname)});
//   }
// })

// const upload=multer({storage:storage})

// //Creating Upload Endpoint for images

// app.use("/images",express.static("upload/images"));

// app.post("/upload",upload.single('product'),(req,res)=>{
//       res.json({
//           success:1,
//           image_url:http://localhost:${port}/images/${req.file.filename}
//       })
// })


// app.listen(port,(error)=>{
//     if(!error){
//       console.log("Server Running on port "+port);
//     }
//     else{
//       console.log("failed while conencting to database");
//     }
// })
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// User Schema and Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Signup Route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ success: false, message: "User already exists" });
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ success: true, message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error creating user" });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // Respond with user data (excluding password)
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error during login" });
  }
});

// Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});