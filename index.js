const contactsElement = document.getElementById("contacts");

const contactsData = JSON.parse(localStorage.getItem("contacts")) || [];

function renderContacts() {
  contactsElement.innerHTML = "";

  let contactCard = "";

  contactsData.forEach((item) => {
    contactCard += `
      <li class="flex items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 48 48"
              class="w-16 h-16 fill-current"
              viewBox="0 0 48 48"
              id="profile"
            >
              <path
                d="M24,6C14.1,6,6,14.1,6,24s8.1,18,18,18s18-8.1,18-18S33.9,6,24,6z M24,13c2.2,0,4,1.8,4,4c0,2.2-1.8,4-4,4c-2.2,0-4-1.8-4-4C20,14.8,21.8,13,24,13z M14,34c0-5.5,4.5-10,10-10c5.5,0,10,4.5,10,10H14z"
              ></path>
            </svg>
          </div>
          <div class="flex flex-col ml-4 break-all">
            <p>${item.firstName} ${item.lastName}</p>
            <p>${item.phoneNumber}</p>
          </div>
        </li>
      `;
  });

  contactsElement.innerHTML = contactCard;
}

renderContacts();
