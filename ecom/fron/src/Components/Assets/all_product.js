import p1_img from "./sweetcorn_seeds.jpg";
import p2_img from "./tomato_seeds.jpg";
import p3_img from "./cucumber_seeds.jpg";
import p4_img from "./spinach_seeds.jpg";
import p5_img from "./onion_seeds.jpg";
import p6_img from "./pumpkin_seeds.jpg";
import p7_img from "./greenbean_seeds.jpg";
import p8_img from "./carrot_seeds.jpg";
import p9_img from "./bellpepper_seeds.jpg";
import p10_img from "./basil_seeds.jpg";
import p11_img from "./parsley_seeds.jpg";
import p12_img from "./sunflower_seeds.jpg";
import p13_img from "./urea.jpg";
import p14_img from "./ammonium_nitrate.jpeg";
import p15_img from "./ammonium_sulfate.jpeg";
import p16_img from "./superphospate.png";
import p17_img from "./triplesuperphospate.jpeg";
import p18_img from "./monoammoniumphosphate.jpeg";
import p19_img from "./diammoniumphosphate.jpeg";
import p20_img from "./potassiumchloride.png";
import p21_img from "./potassiumsulfate.jpeg";
import p22_img from "./calciumnitrate.jpg";
import p23_img from "./dolomite.jpg";
import p24_img from "./gypsum.jpg";
import p25_img from "./drip.jpeg";
import p26_img from "./s2.jpeg";
import p27_img from "./s3.jpeg";
import p28_img from "./s4.jpeg";
import p29_img from "./s5.jpg";
import p30_img from "./s6.jpeg";
import p31_img from "./s7.jpeg";
import p32_img from "./s8.jpg";
import p33_img from "./s9.jpeg";
import p34_img from "./s10.jpeg";
import p35_img from "./s11.jpeg";
import p36_img from "./s12.jpeg";
let all_product = [
  {
    id: 1,
    name: "Sweetcorn Seeds",
    category: "seeds",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
    description: [
      "Plant depth: 1-2 inches",
      "Spacing: 9-12 inches apart",
      "Watering: Regular watering"
    ]
  },
  {
    id: 2,
    name: "Tomato Seeds",
    category: "seeds",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
    description: [
      "Plant depth: 1/4 inch",
      "Spacing: 18-24 inches apart",
      "Watering: Regular, consistent moisture"
    ]
  },
  {
    id: 3,
    name: "Cucumber Seeds",
    category: "seeds",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
    description: [
      "Plant depth: 1 inch",
      "Spacing: 12-18 inches apart",
      "Watering: Keep soil consistently moist"
    ]
  },
  {
    id: 4,
    name: "Spinach Seeds",
    category: "seeds",
    image: p4_img,
    new_price: 45.0,
    old_price: 75.0,
    description: [
      "Plant depth: 1/2 inch",
      "Spacing: 2-4 inches apart",
      "Watering: Keep soil consistently moist"
    ]
  },
  {
    id: 5,
    name: "Onion Seeds",
    category: "seeds",
    image: p5_img,
    new_price: 70.0,
    old_price: 95.5,
    description: [
      "Plant depth: 1/4 inch",
      "Spacing: 4-6 inches apart",
      "Watering: Moderate watering"
    ]
  },
  {
    id: 6,
    name: "Pumpkin Seeds",
    category: "seeds",
    image: p6_img,
    new_price: 55.0,
    old_price: 90.0,
    description: [
      "Plant depth: 1 inch",
      "Spacing: 3-4 feet apart",
      "Watering: Keep soil consistently moist"
    ]
  },
  {
    id: 7,
    name: "Green Bean Seeds",
    category: "seeds",
    image: p7_img,
    new_price: 65.0,
    old_price: 110.5,
    description: [
      "Plant depth: 1 inch",
      "Spacing: 2-4 inches apart",
      "Watering: Moderate watering"
    ]
  },
  {
    id: 8,
    name: "Carrot Seeds",
    category: "seeds",
    image: p8_img,
    new_price: 75.0,
    old_price: 130.5,
    description: [
      "Plant depth: 1/4 inch",
      "Spacing: 1-2 inches apart",
      "Watering: Moderate, avoid waterlogging"
    ]
  },
  {
    id: 9,
    name: "Bell Pepper Seeds",
    category: "seeds",
    image: p9_img,
    new_price: 90.0,
    old_price: 150.0,
    description: [
      "Plant depth: 1/4 inch",
      "Spacing: 18-24 inches apart",
      "Watering: Regular watering"
    ]
  },
  {
    id: 10,
    name: "Basil Seeds",
    category: "seeds",
    image: p10_img,
    new_price: 40.0,
    old_price: 70.5,
    description: [
      "Plant depth: 1/4 inch",
      "Spacing: 6-12 inches apart",
      "Watering: Regular, keep soil moist"
    ]
  },
  {
    id: 11,
    name: "Parsley Seeds",
    category: "seeds",
    image: p11_img,
    new_price: 60.0,
    old_price: 95.5,
    description: [
      "Plant depth: 1/4 inch",
      "Spacing: 6-8 inches apart",
      "Watering: Keep soil moist"
    ]
  },
  {
    id: 12,
    name: "Sunflower Seeds",
    category: "seeds",
    image: p12_img,
    new_price: 80.0,
    old_price: 140.0,
    description: [
      "Plant depth: 1-2 inches",
      "Spacing: 12-18 inches apart",
      "Watering: Regular, but avoid waterlogging"
    ]
  },

  {
    id: 13,
    name: "Urea",
    category: "fertilizers",
    image: p13_img,
    new_price: 50.0,
    old_price: 70.0,
    description: [
      "Best for: Nitrogen-deficient soils",
      "Boosts: Leafy growth",
      "Usage: Avoid overapplication to prevent leaching",
      "Disease/Condition: Can help with nitrogen deficiency-related growth issues; not directly beneficial for bacterial diseases, but promotes healthy growth which makes plants more resilient."
    ]
  },
  {
    id: 14,
    name: "Ammonium Nitrate",
    category: "fertilizers",
    image: p14_img,
    new_price: 60.0,
    old_price: 85.0,
    description: [
      "Best for: Quick nitrogen release",
      "Boosts: Crop yield and growth rate",
      "Usage: Apply during active growing seasons",
      "Disease/Condition: Helps plants recover from nitrogen deficiency, indirectly supporting their immune system against certain diseases like rust or blight."
    ]
  },
  {
    id: 15,
    name: "Ammonium Sulfate",
    category: "fertilizers",
    image: p15_img,
    new_price: 40.0,
    old_price: 60.0,
    description: [
      "Best for: Acidic soils requiring nitrogen and sulfur",
      "Boosts: Protein synthesis in plants",
      "Usage: Avoid overuse in high-pH soils",
      "Disease/Condition: Useful for plants suffering from sulfur deficiency which may lead to poor growth and fungal diseases like powdery mildew."
    ]
  },
  {
    id: 16,
    name: "Superphosphate",
    category: "fertilizers",
    image: p16_img,
    new_price: 55.0,
    old_price: 75.0,
    description: [
      "Best for: Phosphorus-deficient soils",
      "Boosts: Root development and flowering",
      "Usage: Apply during planting or early growth stage",
      "Disease/Condition: Promotes root growth which helps in soil nutrient uptake, thus strengthening the plant's defense against root rot caused by fungal infections."
    ]
  },
  {
    id: 17,
    name: "Triple Superphosphate",
    category: "fertilizers",
    image: p17_img,
    new_price: 65.0,
    old_price: 90.0,
    description: [
      "Best for: High phosphorus demand crops",
      "Boosts: Flowering, fruiting, and root growth",
      "Usage: Apply before planting or during early stages of growth",
      "Disease/Condition: Encourages strong root and flower development, reducing the risk of bacterial blight and other soil-borne diseases."
    ]
  },
  {
    id: 18,
    name: "Monoammonium Phosphate (MAP)",
    category: "fertilizers",
    image: p18_img,
    new_price: 70.0,
    old_price: 95.0,
    description: [
      "Best for: Phosphorus and nitrogen supply",
      "Boosts: Early plant growth and fruiting",
      "Usage: Ideal for poor soils with low phosphorus levels",
      "Disease/Condition: Increases resilience to pests and diseases like aphids and bacterial leaf spot by supporting vigorous early growth."
    ]
  },
  {
    id: 19,
    name: "Diammonium Phosphate (DAP)",
    category: "fertilizers",
    image: p19_img,
    new_price: 75.0,
    old_price: 100.0,
    description: [
      "Best for: Nitrogen and phosphorus supply",
      "Boosts: Root growth and flowering",
      "Usage: Suitable for most crops, apply before planting",
      "Disease/Condition: Helps improve plant vigor, making them less susceptible to fungal infections like root rot and mildew."
    ]
  },
  {
    id: 20,
    name: "Potassium Chloride (Muriate of Potash)",
    category: "fertilizers",
    image: p20_img,
    new_price: 80.0,
    old_price: 110.0,
    description: [
      "Best for: Potassium-deficient soils",
      "Boosts: Plant vigor, disease resistance, and drought tolerance",
      "Usage: Apply during active growth stages or in the early growing season",
      "Disease/Condition: Enhances plant immunity to diseases like bacterial wilt and enhances drought tolerance."
    ]
  },
  {
    id: 21,
    name: "Potassium Sulfate (Sulfate of Potash)",
    category: "fertilizers",
    image: p21_img,
    new_price: 85.0,
    old_price: 115.0,
    description: [
      "Best for: Crops requiring low chloride and high potassium",
      "Boosts: Fruit development and disease resistance",
      "Usage: Apply to soils with a low potassium content",
      "Disease/Condition: Improves fruit quality and disease resistance, helping plants fight off fungal infections like anthracnose and other rot-causing pathogens."
    ]
  },
  {
    id: 22,
    name: "Calcium Nitrate",
    category: "fertilizers",
    image: p22_img,
    new_price: 50.0,
    old_price: 70.0,
    description: [
      "Best for: Calcium-deficient soils",
      "Boosts: Fruit quality, growth, and disease resistance",
      "Usage: Ideal for tomatoes, peppers, and other fruiting crops",
      "Disease/Condition: Prevents blossom end rot and improves plant resistance to bacterial and fungal infections by strengthening cell walls."
    ]
  },
  {
    id: 23,
    name: "Dolomite",
    category: "fertilizers",
    image: p23_img,
    new_price: 45.0,
    old_price: 65.0,
    description: [
      "Best for: Soils with high acidity",
      "Boosts: Magnesium and calcium levels",
      "Usage: Use for soil pH correction and magnesium supplementation",
      "Disease/Condition: Reduces soil acidity, promoting healthier plants less prone to fungal infections like fusarium and root rot."
    ]
  },
  {
    id: 24,
    name: "Gypsum",
    category: "fertilizers",
    image: p24_img,
    new_price: 55.0,
    old_price: 75.0,
    description: [
      "Best for: Improving soil structure and reducing compaction  ",
      "Boosts: Calcium and sulfur levels in soil  ",
      "Usage: Apply to compacted or saline soils  ",
      "Disease/Condition: Enhances plant's resistance to soil-borne diseases by improving root health and reducing salinity stress."
    ]
  },
  
  
  {
    id: 25,
    name: "Drip",
    category: "irrigation",
    image: p25_img,
    new_price: 49.99,
    old_price: 70.0,
    description: [
      "Best for: Efficient and targeted watering",
      "Boosts: Water conservation and reduced evaporation",
      "Usage: Ideal for garden beds and crops"
    ]
  },
  {
    id: 26,
    name: "Sprinkler Heads",
    category: "irrigation",
    image: p26_img,
    new_price: 15.0,
    old_price: 25.0,
    description: [
      "Best for: Even water distribution across garden areas",
      "Boosts: Water efficiency and uniform irrigation",
      "Usage: Suitable for lawns, gardens, and flower beds"
    ]
  },
 
    {
      id: 27,
      name: "Soaker Hose",
      category: "irrigation",
      image: p27_img,
      new_price: 20.0,
      old_price: 35.0,
      description: [
        "Best for: Consistent and deep hydration for garden beds",
        "Boosts: Efficient water distribution without surface runoff",
        "Usage: Ideal for vegetables, shrubs, and flower beds"
      ]
    },
    {
      id: 28,
      name: "Irrigation Timer",
      category: "irrigation",
      image: p28_img,
      new_price: 30.0,
      old_price: 45.0,
      description: [
        "Best for: Automated irrigation schedules",
        "Boosts: Time-saving and consistent watering",
        "Usage: Ideal for all types of irrigation systems, ensuring water is used efficiently"
      ]
    },
    {
      id: 29,
      name: "Micro Sprinklers",
      category: "irrigation",
      image: p29_img,
      new_price: 10.0,
      old_price: 18.0,
      description: [
        "Best for: Precise and gentle watering for small plants",
        "Boosts: Water conservation and even moisture distribution",
        "Usage: Great for flower beds, pots, and container plants"
      ]
    },
    {
      id: 30,
      name: "Water Pump",
      category: "irrigation",
      image: p30_img,
      new_price: 150.0,
      old_price: 200.0,
      description: [
        "Best for: Pressurized water delivery in large irrigation systems",
        "Boosts: Water distribution across large areas",
        "Usage: Ideal for large gardens or agricultural fields"
      ]
    },
    {
      id: 31,
      name: "PVC Pipes",
      category: "irrigation",
      image: p31_img,
      new_price: 5.0,
      old_price: 10.0,
      description: [
        "Best for: Connecting irrigation systems",
        "Boosts: Durability and reliable water flow",
        "Usage: Ideal for both DIY garden irrigation and professional setups"
      ]
    },
    {
      id: 32,
      name: "Rain Barrels",
      category: "irrigation",
      image: p32_img,
      new_price: 60.0,
      old_price: 85.0,
      description: [
        "Best for: Collecting and storing rainwater for irrigation",
        "Boosts: Water conservation and eco-friendly practices",
        "Usage: Great for gardens and landscapes in areas with regular rainfall"
      ]
    },
    {
      id: 33,
      name: "Drip Emitters",
      category: "irrigation",
      image: p33_img,
      new_price: 5.0,
      old_price: 12.0,
      description: [
        "Best for: Targeted watering for individual plants",
        "Boosts: Water efficiency and reduces evaporation",
        "Usage: Ideal for garden rows, flower beds, and potted plants"
      ]
    },
    {
      id: 34,
      name: "Garden Hose",
      category: "irrigation",
      image: p34_img,
      new_price: 25.0,
      old_price: 40.0,
      description: [
        "Best for: General-purpose watering of lawns and garden areas",
        "Boosts: Versatility in watering hard-to-reach areas",
        "Usage: Great for casual gardeners and those with medium-sized landscapes"
      ]
    },
    {
      id: 35,
      name: "Fertilizer Injector",
      category: "irrigation",
      image: p35_img,
      new_price: 45.0,
      old_price: 70.0,
      description: [
        "Best for: Fertilizer integration into irrigation systems",
        "Boosts: Efficient nutrient delivery to plants",
        "Usage: Ideal for large-scale irrigation setups, reducing the need for manual fertilization"
      ]
    },
    {
      id: 36,
      name: "Drip Irrigation Kit",
      category: "irrigation",
      image: p36_img,
      new_price: 100.0,
      old_price: 150.0,
      description: [
        "Best for: Complete drip irrigation setup for small to medium gardens",
        "Boosts: Water conservation and precise nutrient delivery",
        "Usage: Perfect for vegetable gardens, greenhouses, or raised beds"
      ]
    }
  ];
  
  export default all_product;
  
