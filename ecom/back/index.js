const port = 4000;
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(
  "mongodb+srv://dharshinisaiavula:Dharshu@2006@cluster0.mbsij.mongodb.net/E-commerce?retryWrites=true&w=majority",
  {
    serverSelectionTimeoutMS: 30000, // Set a longer timeout for MongoDB connection
  }
)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Database connection error:", error));

// Schema for creating products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// Endpoint to add a product
app.post("/addproduct", async (req, res) => {
  try {
    const newProduct = new Product({
      id: req.body.id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    await newProduct.save();
    res.json({ success: true, message: "Product saved successfully" });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ success: false, message: "Error saving product" });
  }
});

// Image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(null, ${file.fieldname}_${Date.now()}${path.extname(file.originalname)});
  },
});

const upload = multer({ storage: storage });

// Serve uploaded images
app.use("/images", express.static("upload/images"));

// Endpoint to upload an image
app.post("/upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }
  res.json({
    success: true,
    image_url: http://localhost:${port}/images/${req.file.filename},
  });
});

// Base API route
app.get("/", (req, res) => {
  res.send("Express app is running");
});

// Endpoint to remove a product
app.post("/removeproduct", async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ id: req.body.id });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({
      success: true,
      message: "Product removed successfully",
    });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({ success: false, message: "Error removing product" });
  }
});

// Start the server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port " + port);
  } else {
    console.error("Error while starting the server:", error);
  }
});