const mongoose = require("mongoose");
// import maleUserImage from "../../../doctor-at-home/src/assets/userImage.jpg";

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  // You can add more address fields here if needed
});

const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    private: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: addressSchema,
  //   pic: {
  //     type: String,
  //     required: true,
  //     default: maleUserImage,
  //   },
});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;
