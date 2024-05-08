const contactByIdElement = document.getElementById("contact-by-id");
const deleteButtonElement = document.getElementById("delete-button");

function renderContactById() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  console.log(id);

  const dataContacts = JSON.parse(localStorage.getItem("contacts")) || [];
  console.log(dataContacts);

  const contact = dataContacts.find((contact) => {
    return contact.id === id;
  });

  console.log(contact);

  const contactByIdString = `<div>
    <h1 class="font-bold capitalize text-2xl">${contact.fullName}</h1>
    <div class="text-left bg-gray-100 mx-auto rounded-xl shadow-md overflow-hidden w-full mt-4">
      <div class="p-8">
        <h1 class="mr-4">Email: ${contact.email}</h1>
        <h1 class="mr-4">Phone: ${contact.phoneNumber}</h1>
      </div>
    </div>`;

  contactByIdElement.innerHTML = contactByIdString;
}

function deleteContactById() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");

  let dataContacts = JSON.parse(localStorage.getItem("contacts")) || [];
  dataContacts = dataContacts.filter((contact) => contact.id !== id);
  localStorage.setItem("contacts", JSON.stringify(dataContacts));

  // redirect to index.html
  window.location.href = "/index.html";
}

deleteButtonElement.addEventListener("click", deleteContactById);

renderContactById();
