var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
// require("custom-env").env();
const dotenv = require("dotenv");
dotenv.config();

let emailEnv = process.env.EMAIL;
var confirmation = "";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/droit-administratif", function (req, res, next) {
  res.render("droit-administratif");
});

router.get("/droit-immobilier", function (req, res, next) {
  res.render("droit-immobilier");
});

router.get("/droit-contrat", function (req, res, next) {
  res.render("droit-contrat");
});

router.get("/recouvrement-et-execution", function (req, res, next) {
  res.render("recouvrement-et-execution");
});

router.get("/droit-etrangers", function (req, res, next) {
  res.render("droit-etrangers");
});

router.get("/droit-asile", function (req, res, next) {
  res.render("droit-asile");
});

router.get("/droit-logement", function (req, res, next) {
  res.render("droit-logement");
});

router.get("/honoraires", function (req, res, next) {
  res.render("honoraires");
});

router.get("/mentions-legales", function (req, res, next) {
  res.render("mentions-legales");
});

router.get("/contact", function (req, res, next) {
  console.log("confirmation", confirmation);
  res.render("contact", { confirmation: confirmation });
});

router.post("/send-email", async function (req, res, next) {
  "use strict";
  var email = req.body.email;
  var name = req.body.name;
  var firstName = req.body.firstName;
  var tel = req.body.tel;

  var message = req.body.message;

  console.log(process.env.EMAIL, emailEnv);
  console.log("message", message);

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    // type: "OAuth2",
    port: 587,
    secure: false, // true for 465, false for other ports    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // console.log("message :", req.body.message, "email :", req.body.email);
  // send mail with defined transport object
  var mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "Nouveau mail contact de " + name, // Subject line
    text: `Nouveau message de ${firstName} ${name}. Tél :  ${tel}, mail : ${email}.
    Message : ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message envoyé avec succès");
      res.render("contact", { confirmation: "Mail envoyé avec succès" });
    }
  });
});

module.exports = router;
