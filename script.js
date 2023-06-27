const navDown = document.querySelectorAll(".icon-arrow");

// navDown.forEach((el, i) => {
//   el.addEventListener("click");
// });

const firstTrial = function (slide) {
  document
    .querySelector(`.nav-card[data-slide="${slide}"]`)
    .classList.toggle("hidden");
  // document
  //   .querySelector(`.icon-arrow[data-slide="${slide}"]`)
  //   .classList.add("mov");
};
// firstTrial(2);

// navDown.forEach((el, i) => {
//   el.addEventListener("click", firstTrial);
//   firstTrial(i);
// });
navDown.forEach((_, i) => {
  document
    .querySelector(`.icon-arrow[data-slide="${i}"]`)
    .addEventListener("click", function () {
      document
        .querySelector(`.icon-arrow[data-slide="${i}"]`)
        .classList.toggle("mov");
      firstTrial(i);
    });
});
const mediaQuery = window.matchMedia("min-width:900px");
console.log(mediaQuery);
if (mediaQuery.matches) alert("Media Query matched");
// const handleMobileChanges = function (e) {
//   if (e.matches) {
//     console.log("MEDIA QUERY MATCHES");
//   }
// };

// mediaQuery.addEventListener("change", handleMobileChanges);
// handleMobileChanges(mediaQuery);

const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", function () {
  menu.style.display = "none";
  close.style.display = "block";
  document.querySelector(".landing-page-text").style.display = "none";
  // document.querySelector(".display").style.display = "block";
  document.querySelector(".nav-container").classList.add("display");
  // document.querySelector(".display").classList.add("test");
  document.querySelector(".nav-container").style.display = "flex";
  // document.querySelector(".nav-container").style.flexDirection = "column";
  // document.querySelector(".nav-container").style.color = "black";
  // document.querySelector(".display").classList.add("btn");
  // document.querySelector(".btn-1").style.display = "flex";
  // document.querySelector(".btn-1").style.color = "black";
  const html = `
    <div class="header-btn">
      <p class="btn btn-1">Login</p>
      <button class="btn btn-2">Sign Up</button>
    </div>
  `;
  document
    .querySelector(".nav-container")
    .insertAdjacentHTML("beforeend", html);
  document.querySelector(".btn-1").style.display = "flex";
  document.querySelector(".btn-2").style.display = "flex";
});
close.addEventListener("click", function () {
  close.style.display = "none";
  menu.style.display = "block";
  document.querySelector(".nav-container").classList.remove("display");
  document.querySelector(".nav-container").style.display = "none";
  // document.querySelector(".display").style.display = "none";
  document.querySelector(".landing-page-text").style.display = "block";
  document.querySelector(".btn-1").style.display = "none";
  document.querySelector(".btn-2").style.display = "none";
});
