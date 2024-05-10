let navBar = document.querySelector(".navbar");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    navBar.classList.add("header-scrolled");
  } else {
    navBar.classList.remove("header-scrolled");
  }
};

let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLink.forEach((a) => {
  a.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});


//TODO form validation

let firstNameError = document.querySelector("#firstname-error");
let lastNameError = document.querySelector("#lastname-error");
let numberError = document.querySelector("#number-error");
let timeError = document.querySelector("#time-error");
let dateError = document.querySelector("#date-error");
let typeError = document.querySelector("#type-error");
let emailError = document.querySelector("#email-error");
let submitError = document.querySelector("#submit-error");
let termsError = document.querySelector("#terms-error");
const toastLiveExample = document.getElementById("liveToast");
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

const validFirstName = () => {
  let firstName = document.querySelector("#first-name").value;
  if (firstName.length == 0) {
    firstNameError.innerHTML = "first name is required";
    firstNameError.classList.add("text-danger");
    return false;
  }
  if (!firstName.match(/^[a-zA-Z]+$/)) {
    firstNameError.innerHTML = "write full name";
    firstNameError.classList.add("text-danger");
    return false;
  }
  firstNameError.innerHTML = "";
  return true;
};

const validLastName = () => {
  let lastName = document.querySelector("#last-name").value;
  if (lastName.length == 0) {
    lastNameError.innerHTML = "last name is required";
    firstNameError.classList.add("text-danger");
    return false;
  }
  if (!lastName.match(/^[a-zA-Z]+$/)) {
    lastNameError.innerHTML = "write full name";
    firstNameError.classList.add("text-danger");
    return false;
  }
  lastNameError.innerHTML = "";
  return true;
};

const validNumber = () => {
  const number = document.querySelector("#phone-no").value;
  if (number.length == 0) {
    numberError.innerHTML = "number is required";
    numberError.classList.add("text-danger");
    return false;
  }
  if (number.length !== 10) {
    numberError.innerHTML = "phone no should be 10 digits";
    numberError.classList.add("text-danger");
    return false;
  }
  if (!number.match(/^[0-9]{10}$/)) {
    numberError.innerHTML = "only digits please";
    numberError.classList.add("text-danger");
    return false;
  }
  numberError.innerHTML = "";
  return true;
};

const validDate = () => {
  const date = document.querySelector("#dob").value;

  if (date.length == 0) {
    dateError.innerHTML = "date is required";
    dateError.classList.add("text-danger");
    return false;
  }
  dateError.innerHTML = "";
  return true;
};
const validTime = () => {
  const time = document.querySelector("#time").value;
  if (time.length == 0) {
    timeError.innerHTML = "time is required";
    timeError.classList.add("text-danger");
    return false;
  }
  timeError.innerHTML = "";
  return true;
};

const validEmail = () => {
  const email = document.querySelector("#email").value;
  if (email.length == 0) {
    emailError.innerHTML = "email is required";
    emailError.classList.add("text-danger");
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "email invalid";
    return false;
  }
  emailError.innerHTML = "";
  return true;
};

const validType = () => {
  const type = document.querySelector("#type").value;
  if (type.length == 0) {
    typeError.innerHTML = "type is required";
    return false;
  }
  typeError.innerHTML = "";
  return true;
};

const validCheckTerms = () => {
  const terms = document.querySelector("#checkTerms").checked;
  if (terms == false) {
    termsError.innerHTML = "please check the box";
    termsError.classList.add("text-danger");
    return false;
  }
  termsError.innerHTML = "";
  return true;
};
const validForm = () => {
  if (
    !validFirstName() ||
    !validLastName() ||
    !validNumber() ||
    !validDate() ||
    !validTime() ||
    !validEmail() ||
    !validCheckTerms() ||
    !validType()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "please fix error to submit";
    submitError.classList.add("text-danger");
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
  setTimeout(() => {
    firstNameError.innerHTML = "";
    lastNameError.innerHTML = "";
    numberError.innerHTML = "";
    timeError.innerHTML = "";
    dateError.innerHTML = "";
    typeError.innerHTML = "";
    emailError.innerHTML = "";
    termsError.innerHTML = "";
    submitError.innerHTML = "";
    form.reset();
  }, 3000);

  setTimeout(() => {
    toastBootstrap.show();
  }, 3000);
  return true;
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyMhiv_hyOO3zUKowwPSGu0Zv24sjdMVAk6xPNqD0V1GiuuzZQDh_Lt9-P7IP0rLAeb/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
