const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://vaishnavi0907:o77SPfLlHLhLZVFl@cluster0.0eaglsp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("error is", error);
  }
};
module.exports = connectDB;
                                                                                                              