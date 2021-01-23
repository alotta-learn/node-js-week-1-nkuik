const express = require("express");
const router = express.Router();

router.get("/:calculationMethod", (request, response) => {
  const calculationMethod = request.params.calculationMethod;

  // loop through the object values
  // add all the values together

  if (calculationMethod === "addition") {
    let total = 0;
    for (const [key, queryParamtereValue] of Object.entries(request.query)) {
      total += parseFloat(queryParamtereValue);
    }

    response.json(total);
  }
});

router.post("/:calculationMethod", (request, response) => {
  const calculationMethod = request.params.calculationMethod;

  // loop through the object values
  // add all the values together
  console.log(request.body);

  if (calculationMethod === "addition") {
    let total = 0;
    for (const [key, queryParamtereValue] of Object.entries(request.body)) {
      total += parseFloat(queryParamtereValue);
    }

    response.json(total);
  }
});

module.exports = router;
