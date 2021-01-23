const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const names = await knex("contacts").select("name", "phonenumber");
    response.json(names);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  
})

module.exports = router;
