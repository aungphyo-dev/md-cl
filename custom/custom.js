let eye = document.querySelector(".bi-eye-fill");
let inp = document.querySelector(".visible-check");

eye.addEventListener("click", () => {
  if (inp.type == "password") {
    inp.type = "text";
  } else {
    inp.type = "password";
  }
});
