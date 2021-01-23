const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/:id", async (request, response) => {
  try {
    console.log(request.params);
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const names = await knex("contacts").where({idcontacts: request.params.id});
    response.json(names[0]);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  
})

module.exports = router;
