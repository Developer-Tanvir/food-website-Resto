let menu = document.querySelector("#menu-bars");
let navBar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navBar.classList.toggle("active");
}


let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");




window.onscroll = () => {

  menu.classList.remove("fa-times");
  navBar.classList.remove("active");

  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");
    if (top => offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        let navLinks = document.querySelector("header .navbar a[href*='+id+']").classList.add("active");
      });
    };
  });
}

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active")
}
document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active")
}

// Swiper 

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// review slider 
var swiper = new Swiper(".review-sliver", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});