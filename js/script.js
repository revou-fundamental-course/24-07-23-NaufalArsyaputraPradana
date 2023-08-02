// JavaScript untuk responsive navbar
const navbar = document.getElementById("nav");
const sticky = navbar.offsetTop;
window.onscroll = function () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-navbar");
    document.body.classList.add("fixed-navbar-padding");
  } else {
    navbar.classList.remove("fixed-navbar");
    document.body.classList.remove("fixed-navbar-padding");
  }
};

// JavaScript untuk image slide show
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Gambar berubah setiap 2 detik
}

// JavaScript untuk opening dan closing the modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// JavaScript validation
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const interestInput = document.getElementById("interest");

form.addEventListener("submit", (event) => {
  // Jika Tidak Valid
  if (!validateName() || !validateEmail() || !validateInterest()) {
    event.preventDefault();
  }
});

function validateName() {
  const nameValue = nameInput.value.trim();
  if (nameValue === "") {
    setErrorFor(nameInput, "Name cannot be blank");
    return false;
  } else {
    setSuccessFor(nameInput);
    return true;
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (emailValue === "") {
    setErrorFor(emailInput, "Email cannot be blank");
    return false;
  } else if (!emailPattern.test(emailValue)) {
    setErrorFor(emailInput, "Invalid email format");
    return false;
  } else {
    setSuccessFor(emailInput);
    return true;
  }
}

function validateInterest() {
  const interestValue = interestInput.value;
  if (interestValue === "") {
    setErrorFor(interestInput, "Please select an option");
    return false;
  } else {
    setSuccessFor(interestInput);
    return true;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector("small");
  formControl.className = "form-control error";
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
