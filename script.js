const burgerBtn = document.querySelector(".icon");

const openBurger = () => {
  const burger = document.getElementById("head__menu");
  if (burger.style.display === "block") {
    burger.style.display = "none";
  } else {
    burger.style.display = "block";
  }
};

burgerBtn.addEventListener("click", openBurger);
const subscribeBtn = document.querySelector(".subscribe__btn");
const userEmail = document.querySelector(".subscribe__input");
let userEmailValue = "";

userEmail.addEventListener("change", (event) => {
  userEmailValue = event.target.value;
});
subscribeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(userEmailValue);
});
