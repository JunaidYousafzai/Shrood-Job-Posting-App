const User = require("../models/registerModel");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken,js");
const dotenv = require("dotenv").config();

const registerUser = async (request, response) => {
  try {
    const { username, email, contact, address, password, age, profilePhoto } =
      request.body;

    if (!username || !email || !contact || !address || !password || !age) {
      return response.status(400).json({
        message: "Every field must be filled except profile photo!",
      });
    }

    const alreadyExists = await User.findOne({
      $or: [{ email }, { username }, { contact }],
    });
    if (alreadyExists) {
      return response.status(409).json({
        message:
          "User already registered with the same email, username, or contact!",
      });
    }

    const salt = await bcrypt.genSalt(15);
    const hashedPassword = await bcrypt.hash(password, salt);

    const registeringUser = await User.create({
      username,
      email,
      contact,
      address,
      password: hashedPassword,
      age,
      profilePhoto,
    });

    return response.status(201).json({
      message: "Account registered successfully. Now Login!",
      user: registeringUser,
    });
  } catch (err) {
    console.error(err);
    return response.status(500).json({
      message: err.message || "Error registering user",
    });
  }
};

const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({ message: "Both fields must be filled!" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return response.status(404).json({ message: "User not found!" });
    }

    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch) {
      return response.status(401).json({ message: "Invalid password!" });
    }

    const token = generateToken(user._id);

    console.log("User ID:", user._id);



    return response.status(200).json({
      message: "User login successful",
      user: {
        userId: user._id, 
        username: user.username,
        email: user.email,
        contact: user.contact,
        address: user.address,
        profilePhoto: user.profilePhoto,
        token: token,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return response.status(500).json({ message: "Internal server error" });
  }
};

const jobs = async (request, response) => {
  try {
    const allUser = await User.find();
    if (!allUser) {
      return response.status(401).json({ message: `Not authorized` });
    }
    response.status(200).json({ messgae: `all Users`, allUser });
  } catch (err) {
    response.status(500).json({ message: err });
  }
};

const profile = async (request, response) => {
  try {
    const userProfile = await User.findById(request.user._id);
    if (!userProfile) {
      return response.status(401).json({ message: "Not authorized" });
    }
    response.status(200).json(userProfile);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  profile,
};
