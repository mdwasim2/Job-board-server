const nodemailer = require("nodemailer");
exports.sendEmail = async (email, otp, name) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Hello",
      text: "Hello world?",
      html: `<div style=font-family:Arial,sans-serif;max-width:500px;margin:auto;padding:20px;color:#333><h2 style=color:#2563eb>Verify Your Email</h2><p>Hello ${name},<p>Thank you for creating an account. Use the OTP below to verify your email address.<h1 style=background:#f1f5f9;color:#2563eb;text-align:center;padding:15px;letter-spacing:8px>${otp}</h1><p>This OTP expires in 5 minutes. Please do not share it with anyone.<p>Regards,<br><strong>Job Board Team</strong></div>`,
    });

    console.log("Message sent: %s", info.messageId);

  } catch (err) {
    console.error("Error while sending mail:", err);
  }
}