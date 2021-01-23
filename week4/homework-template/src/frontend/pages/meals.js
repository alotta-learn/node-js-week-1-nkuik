window.handleMealsRequest = () => {
  document.body.innerHTML = `
  <h1>Meals - are we here yet?</h1>`;

  // make sure the backend api works before working with it here
  fetch("/api/meals")
    .then(response => response.json())
    .then(meals => {
      const ul = document.createElement('ul');
      meals.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = `<h1>${element.title}</h1>`;
        li.className = "prettyName";
        ul.appendChild(li);
      });
      
      document.body.appendChild(ul)
    });
};
