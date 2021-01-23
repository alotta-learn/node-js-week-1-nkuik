window.handleHomeRequest = () => {
  document.body.innerHTML = `<h1>Home</h1>
  <a href="meals" data-navigo>Meals</a>
  <hr>
  <a href="meal/1" data-navigo>meal/1</a>
  <hr>
  <a href="meal/2" data-navigo>meal/2</a>
  <hr>
  `;
  

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
