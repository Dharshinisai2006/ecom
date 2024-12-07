const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// MongoDB URI
const mongoURI = process.env.MONGO_URI;

// Log the URI for debugging
console.log('Connecting to MongoDB with URI:', mongoURI);

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((err) => {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1); // Exit if connection fails
  });

app.get('/', (req, res) => {
  res.send('Server is running and connected to MongoDB!');
});

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required:true,
    },
    eventNames:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true ,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true
    },
})
app.post('/addproduct',async(req,res)=>{
    const Product=new Product({
        id:req.body.id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(Product);
    await Product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })

})
app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
});
