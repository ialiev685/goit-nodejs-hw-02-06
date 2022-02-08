const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const arrOptSubscription = ["starter", "pro", "business"];

const schemaUser = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    subscription: {
      type: String,
      enum: arrOptSubscription,
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

// schemaUser.methods.createVerifyToken = function () {
//   this.verifyToken = uuidv4()
// }

const User = model("user", schemaUser);

module.exports = {
  User,
  arrOptSubscription,
};
