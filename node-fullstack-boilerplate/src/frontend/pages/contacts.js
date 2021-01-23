function renderContacts(contacts) {
  const ul = document.createElement("ul");
  const firstLi = document.createElement("li");
  firstLi.innerHTML = "contacts.js frontend";
  ul.appendChild(firstLi);
  contacts.forEach((contact) => { 
    const li = document.createElement("li");
    li.innerHTML = `name: ${contact.name}, phonenumber = ${contact.phonenumber}`;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

window.handleContactsRequest = async () => {
  document.body.innerHTML = `
  <h1>Contacts</h1>`;

  try {
    const response = await fetch("/api/contacts");
    const contacts = await response.json();
    renderContacts(contacts);
  } catch(err) {
    console.log(`failed getting contacts`);
  }
};
