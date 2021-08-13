window.addEventListener("DOMContentLoaded", (event) => {
  var ham = document.getElementById("mobile");
  var menu = document.querySelector(".menu");
  var mobile = document.querySelector(".mobile");
  ham.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      mobile.style.transform = "rotate(0deg)";
    } else {
      menu.classList.add("showMenu");
      mobile.style.transform = "rotate(90deg)";
    }
  }
});
