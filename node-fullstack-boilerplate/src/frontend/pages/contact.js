
  window.handleContactRequest = () => {
    document.body.innerHTML = `
    <h1>Contact</h1>`;
  
    // make sure the backend api works before working with it here
    fetch("/api/contact")
      .then((response) => response.json())
      .then(renderContacts)
      .catch(err => console.log(`failed getting contact`));
  };
  