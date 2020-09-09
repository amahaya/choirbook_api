// Imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");

//Routes
module.exports = {
  register: (req, res) => {
    const { email, username, password, city, birthday } = req.body;

    if (!email || !username || !password || !birthday) {
      // === if (email === null || username === null || ...)
      return res.status(400).json({ error: "Missing parameter" });
    }

    models.User.findOne({
      attributes: ["email"],
      where: { email }, // === { email : email }
    })
      .then((userFound) => {
        if (!userFound) {
          bcrypt.hash(password, 5, (err, bcryptedPassword) => {
            models.User.create({
              email,
              username,
              password: bcryptedPassword,
              city,
              birthday,
            })
              .then((newUser) => {
                return res.status(201).json(newUser);
              })
              .catch((err) => {
                return res.status(500).json(err);
              });
          });
        } else {
          return res.status(409).json({ error: "user already exists" });
        }
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  },
};
