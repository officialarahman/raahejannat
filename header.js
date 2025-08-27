let lastScrollTop = 0;
let scrollUpDistance = 0; // Track how much user scrolled up
const header = document.getElementById('header');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop < 200) {
    // Always show header until scrolled more than 200px
    header.classList.remove('header-hidden');
    scrollUpDistance = 0; // reset tracker
  } else if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add('header-hidden');
    scrollUpDistance = 0; // reset tracker when scrolling down
  } else if (scrollTop < lastScrollTop) {
    // Scrolling up
    scrollUpDistance += (lastScrollTop - scrollTop);

    if (scrollUpDistance >= 250) {
      header.classList.remove('header-hidden');
      scrollUpDistance = 0; // reset after revealing
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative
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
