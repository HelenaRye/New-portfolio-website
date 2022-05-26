const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-menu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("change");
    nav.classList.toggle("nav-active");
  });
};

navSlide();

var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
