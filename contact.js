window.onload = function () {
  var recaptcha = document.querySelector("#g-recaptcha-response");

  if (recaptcha) {
    recaptcha.setAttribute("required", "required");
  }

  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;

  if (recaptcha) {
    console.log(recaptcha);
    recaptcha.attr("data-theme", currentTheme);
  }
};

var modal = document.querySelector("#form-modal");

var close_modal = document.querySelector(".close-modal");

close_modal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const contact_form = document.querySelector(".contact_form");

contact_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new URLSearchParams(new FormData(contact_form));

  fetch("/POST", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  })
    .then((res) => {
      modal.style.display = "flex";
      grecaptcha.reset();
      contact_form.reset();
    })
    .catch((err) => console.error(err));
});
