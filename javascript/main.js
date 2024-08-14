let form = document.querySelector("form");
let firstName = document.getElementById("firstName");
let errorForFirstName = document.getElementById("errorForFirstName");
let firstNameBool = false;
let lastName = document.getElementById("lastName");
let errorForLastName = document.getElementById("errorForLastName");
let lastNameBool = false;

let email = document.getElementById("email");
let errorForEmail = document.getElementById("errorForEmail");
let emailBool = false;

let types = document.querySelectorAll('input[name="type"]');
let errorForType = document.getElementById("errorForType");
let typeBool = false;

let Message = document.getElementById("Message");
let errorForMessage = document.getElementById("errorForMessage");
let MessageBool = false;

let check = document.getElementById("check");
let errorForCheck = document.getElementById("errorForCheck");
let checkBool = false;

let submitBtn = document.getElementById("submit");

let successCard = document.getElementById("successCard");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  firstNameCheck(firstName);
  lastNameCheck(lastName);
  emailCheck(email);
  queryTypeCheck(types);
  messageCheck(Message);
  checkBoxCheck(check);
  if (
    firstNameBool == true &&
    lastNameBool == true &&
    emailBool == true &&
    typeBool == true &&
    MessageBool == true &&
    checkBool == true
  ) {
    successCard.style.display = "block";
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    document.querySelector('input[name="type"]:checked').checked = false;
    Message.value = "";
    document.querySelector('input[name="test"]:checked').checked = false;
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
});

function firstNameCheck(firstName) {
  if (firstName.value === "") {
    errorForFirstName.style.display = "block";
    firstName.style.borderColor = "hsl(0, 66%, 54%)";
  } else {
    errorForFirstName.style.display = "none";
    firstName.style.borderColor = "";
    firstNameBool = true;
  }
}
function lastNameCheck(lastName) {
  if (lastName.value === "") {
    errorForLastName.style.display = "block";
    lastName.style.borderColor = "hsl(0, 66%, 54%)";
  } else {
    errorForLastName.style.display = "none";
    lastName.style.borderColor = "";
    lastNameBool = true;
  }
}
function emailCheck(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.value.match(regex)) {
    errorForEmail.style.display = "block";
    email.style.borderColor = "hsl(0, 66%, 54%)";
  } else {
    errorForEmail.style.display = "none";
    email.style.borderColor = "";
    emailBool = true;
  }
}
function queryTypeCheck(types) {
  let typeChecked = false;
  types.forEach((type) => {
    if (type.checked) {
      typeChecked = true;
    }
  });

  if (!typeChecked) {
    errorForType.style.display = "block";
  } else {
    errorForType.style.display = "none";
    typeBool = true;
  }
}
function messageCheck(Message) {
  if (Message.value === "") {
    errorForMessage.style.display = "block";
    Message.style.borderColor = "hsl(0, 66%, 54%)";
  } else {
    errorForMessage.style.display = "none";
    Message.style.borderColor = "";
    MessageBool = true;
  }
}
function checkBoxCheck(check) {
  if (check.checked) {
    errorForCheck.style.display = "none";
    checkBool = true;
  } else {
    errorForCheck.style.display = "block";
  }
}
