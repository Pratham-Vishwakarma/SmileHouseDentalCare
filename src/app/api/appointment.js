import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { date, timeSlot } = req.body;

    // Validate the input data
    if (!date || !timeSlot) {
      return res.status(400).json({ message: "Invalid data. Date and time slot are required." });
    }

    // Create a nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for port 465, false for port 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.DOCTOR_EMAIL,
      subject: "New Appointment Booked",
      text: `An appointment has been booked for ${date} at ${timeSlot}.`,
    };

    try {
      // Verify the SMTP connection
      await transporter.verify();
      console.log("SMTP server connected successfully!");

      // Send the email
      await transporter.sendMail(mailOptions);
      console.log(`Email sent to ${process.env.DOCTOR_EMAIL}`);

      // Send a success response
      res.status(200).json({ message: "Appointment booked and doctor notified." });
    } catch (error) {
      // Log detailed error message
      console.error("Error sending email:", error);

      if (error.response) {
        console.error("SMTP response error:", error.response);
      }

      // Respond with error message
      res.status(500).json({ message: `Failed to notify the doctor. Error: ${error.message}` });
    }
  } else {
    res.status(405).json({ message: "Method not allowed. Only POST requests are accepted." });
  }
}
