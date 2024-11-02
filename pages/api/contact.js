// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, lastname, email, phone, service, message } = req.body;

    // Configure your Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Job request from ${firstname} ${lastname} - ${service}`,
      text: `
        Hi, Marv!, My name is ${firstname} ${lastname}, i need you to render me this service, which is ${service}.

        Further details are below: 
        ${message}

        You can contact me on:
        Email: ${email}
        Phone: ${phone}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
