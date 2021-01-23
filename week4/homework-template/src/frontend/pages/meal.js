window.handleMealRequest = params => {
  document.body.innerHTML = `
  <h1>Meal with id ${params.id}</h1>
    <form action="../../api/meals" method="post">
    <label for="fname">Title:</label>
    <input type="text" id="title" name="Title"><br><br>
    <label for="lname">Price:</label>
    <input type="text" id="price" name="Price"><br><br>
    <input type="submit" value="Submit">
  </form>`
  // make sure the backend api works before working with it here
 /* fetch("/api/meal")
    .then(response => response.json())
    .then(meal => console.log(meal));j*/
};
