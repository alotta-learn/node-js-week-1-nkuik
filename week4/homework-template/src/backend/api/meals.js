const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const meals = await knex('meals').select('*');
    response.json(meals); 
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    const myTitle = request.body.Title;
    const myPrice = request.body.Price;
    console.log(`request.body = ${JSON.stringify(request.body)}; title = ${myTitle}, price = ${myPrice}`);
    const newId = await knex('meals').insert(
      {
        title: myTitle,
        price: myPrice
      }
    );
    //console.log(`result = ${result}`);
    response.json(`created new meal with id ${newId}`)
  } catch (error) {
    throw error;
  }
})

module.exports = router;
