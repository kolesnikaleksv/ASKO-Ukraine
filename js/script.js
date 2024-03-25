let prevScrollPos = window.scrollY;
const scrollHandle = () => {
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

function toggleMenu() {
  if(this.classList.contains('active')) {
    this.classList.remove('active');
    document.querySelector('.header').classList.remove('active');
    document.querySelector('.close-icon').style.display = 'none';
    document.querySelector('.open-icon').style.display = 'block';
    document.querySelector('.menu-overlay').style.display = 'none';
    document.getElementById('body').classList.remove('stop-scrolling');
    document.querySelector('.navbar-brand').classList.remove('menu-active');
  } else {
    this.classList.add('active');
    document.querySelector('.header').classList.add('active');
    document.querySelector('.header').classList.remove('hover');
    document.querySelector('.close-icon').style.display = 'block';
    document.querySelector('.open-icon').style.display = 'none';
    document.querySelector('.menu-overlay').style.display = 'flex';
    document.getElementById('body').classList.add('stop-scrolling');
    document.querySelector('.navbar-brand').classList.add('menu-active');
  }
};

document.querySelector(".back-to-top").addEventListener("click", scrollToTop);
document.querySelector(".btn-menu").addEventListener("click", toggleMenu)
window.onscroll = scrollHandle;
