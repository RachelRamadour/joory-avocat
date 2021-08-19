const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

require("dotenv").config();
app.use(bodyParser.json());

const nodemailer = require("nodemailer");
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

app.use("/index", require("./routes/index"));

// let transport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
// });

// let mailOptions = {
//   from: '"Fred Foo 👻" <rachel.ramadour@gmail.com>', // sender address
//   to: "rramadour@gmail.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>", // html body
// };

// transport.sendMail(mailOptions, function (err, data) {
//   if (err) {
//     console.log("Error Occurs");
//   } else {
//     console.log("Email sent !!");
//   }
// });
