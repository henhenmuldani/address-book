function addContact(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const phoneNumber = formData.get("phone-number");

  const newContact = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
  };

  // ambil data dari localStorage
  const contactsData = JSON.parse(localStorage.getItem("contacts")) || [];

  // tambah kontak baru ke array
  contactsData.push(newContact);

  // simpan data ke localStorage
  localStorage.setItem("contacts", JSON.stringify(contactsData));

  // redirect ke halaman utama
  window.location.href = "../index.html";
}

// const addContactFormElement = document.getElementById("add-contact-form");
// addContactFormElement.addEventListener("submit", addContact);
