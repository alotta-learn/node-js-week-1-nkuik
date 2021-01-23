const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/:id", async (request, response) => {
  try {
    const allMeals = await knex('meals').select('*');
  //  const allIds = allMeals.map(m =>)
    const requestId = parseInt(request.params.id);
    const mealsWithId = allMeals.filter(m => m.id === requestId);
    if (mealsWithId.length === 0) {
      response.json([]);
    }
    else {
      response.json(mealsWithId[0])
    }
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  
})

module.exports = router;
