//imports
const express = require("express");
const { register } = require("./users");

//Router
exports.router = (() => {
  const apiRouter = express.Router();

  //Users routes
  apiRouter.route("/users").post(register);

  return apiRouter;
})();

// GET
// /users => liste de users
// /users/:id => un seul user

// POST
// /users => creer un user

// PUT
// /users/:id => mettre à jour un user

// DELETE
// /users/:id => supprimer un user
