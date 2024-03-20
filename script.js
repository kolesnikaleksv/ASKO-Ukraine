// let prevScrollPos = window.scrollY;

// window.onscroll = function () {
//   let currentScrollPos = window.scrollY;
//   if (prevScrollPos > currentScrollPos) {
//     document.querySelector(".header").style.top = "0";
//   } else {
//     document.querySelector(".header").style.top = "-75px";
//   }
//   prevScrollPos = currentScrollPos;
// };

let prevScrollPos = window.scrollY;
const scrollHandle = () => {
  console.log("hello");
  let currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
  } else {
    document.querySelector(".header").style.top = "-75px";
  }
  prevScrollPos = currentScrollPos;
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
document.querySelector(".back-to-top").addEventListener("click", scrollToTop);

window.onscroll = scrollHandle;
