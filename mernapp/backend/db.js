const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://Fooddelapp:ASRA@cluster0.y0wzr61.mongodb.net/FDAMERN?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    // Use the new URL parser and set other options
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Access the collection using mongoose.model
    const FoodItem = mongoose.model(
      "foodData2",
      new mongoose.Schema({}),
      "foodData2"
    );

    // Fetch all documents from the collection
    const data = await FoodItem.find({});

    console.log("Connected to MongoDB!");
    // console.log(data);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;
