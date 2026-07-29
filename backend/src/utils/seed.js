import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../models/User.model.js";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const adminExists = await User.findOne({ email: "admin@sparkle.com" });

    if (!adminExists) {
      await User.create({
        name: "Aditya Jaiswal",
        email: "ajaditya1908@gmail.com",
        password: "123456",
        phone: "9458970585",
        role: "admin",
      });

      console.log("Admin created: admin@sparkle.com / Admin@1234");
    } else {
      console.log("Admin already exists");
    }

    const staffExists = await User.findOne({
      email: "staff@sparkle.com",
    });

    if (!staffExists) {
      await User.create({
        name: "Staff Member",
        email: "staff@sparkle.com",
        password: "Staff@1234",
        phone: "8888888888",
        role: "staff",
      });

      console.log("Staff created: staff@sparkle.com / Staff@1234");
    } else {
      console.log("Staff already exists");
    }

    const customerExists = await User.findOne({
      email: "customer@example.com",
    });

    if (!customerExists) {
      await User.create({
        name: "Demo Customer",
        email: "customer@example.com",
        password: "Customer@1234",
        phone: "7777777777",
        role: "customer",
      });

      console.log("Customer created: customer@example.com / Customer@1234");
    } else {
      console.log("Customer already exists");
    }

    console.log("\nSeed complete!");
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
};

seed();
