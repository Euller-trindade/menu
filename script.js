const navBar = document.querySelector(".navBar");
const li = document.querySelectorAll("li");

li.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    navBar.querySelector(".active-list").classList.remove("active-list");
    el.classList.toggle("active-list");

    const indicator = document.querySelector(".indicator");
    indicator.style.transform = `translateX(calc(${index * 90}px ))`;
  });
});
