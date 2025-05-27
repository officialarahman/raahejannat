let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Always show header until scrolled more than 200px
  if (scrollTop < 200) {
    header.classList.remove('header-hidden');
  } else if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add('header-hidden');
  } else if (scrollTop < lastScrollTop) {
    // Scrolling up (immediate reveal)
    header.classList.remove('header-hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or overscroll
});


// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

// Initially hide sidebar
navLinks.style.left = "-100%";

menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
}

// Close sidebar when any nav link is clicked (for mobile)
let allNavLinks = document.querySelectorAll(".nav-links a");
allNavLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.style.left = "-100%";
  });
});
