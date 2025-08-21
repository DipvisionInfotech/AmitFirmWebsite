// // import express, { request } from "express";
// // import cors from "cors";
// // import e from "express";

// // const app = express();
// // const PORT = 5000;

// // app.use(cors());
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // app.post("/api/contact", (req, res) => {
// //   const { name, email, phone, message } = req.body;

// //   if (!name || !email || !phone || !message) {
// //     return res.status(400).json({ error: "All fields are required" });
// //   }

// //   console.log("New Message Received: ", { name, email, phone, message });

// //   res
// //     .status(200)
// //     .json({ success: true, message: "Message Sent Successfully!" });
// // });

// // app.listen(PORT, () =>
// //   console.log(`Server is listening on http://localhost:${PORT}`)
// // );

// server.js
import express from "express";
// import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/contactFormDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// ✅ Define Schema & Model
// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   message: String,
//   date: { type: Date, default: Date.now },
// });

// const Contact = mongoose.model("Contact", contactSchema);

// ✅ Contact API Route
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // check if fields are empty
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ msg: "All fields are mandatory!" });
  }

  try {
    // 1️⃣ Save to MongoDB
    // const newContact = new Contact({ name, email, phone, message });
    // await newContact.save();

    // 2️⃣ Send Mail
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // where you want to receive
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ msg: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong!" });
  }
});

// ✅ Start Server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
