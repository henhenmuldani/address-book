function addContact(event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const phoneNumber = document.getElementById("phone-number").value;

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
  // window.location.href = "/src/index.html";
  window.location.href = "https://address-book.henhenmuldani.com";
}

const addContactFormElement = document.getElementById("add-contact-form");
addContactFormElement.addEventListener("submit", addContact);
