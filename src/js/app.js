import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const menu = document.querySelector(".menu");
const headerList = document.querySelector(".header__list");
const body = document.querySelector("body");
const link = document.querySelectorAll(".header__link");

menu.addEventListener("click", (e) => {
  headerList.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("hidden");
});

link.forEach((el) => {
  el.addEventListener("click", () => {
    headerList.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("hidden");
  });
});

// Set the date we're counting down to
var countDownDate = new Date("June 24, 2022 15:37:25").getTime();

function timer() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML =
      '<p class="intro__num">EXPIRED</p>';
  }
}

window.onload = timer();

// Update the count down every 1 second
var x = setInterval(function () {
  timer();
}, 1000);

gsap.from(".layer", { opacity: 1, duration: 1, delay: 0.2 });
gsap.from(".intro__title", { y: 50, opacity: 0, duration: 1, delay: 0.4 });
gsap.from(".intro__desc", { y: 20, opacity: 0, duration: 1, delay: 1 });
gsap.from(".intro__content", { y: -50, opacity: 0, duration: 1, delay: 1.2 });

gsap.registerPlugin(ScrollTrigger);
// For each images with class "animate-image" on page
gsap.utils.toArray(".planets__p").forEach((el, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "center bottom",
      toggleActions: "play none none reverse",
    },
  });

  tl.set(el, { transformOrigin: "center center" }).fromTo(
    el,
    { opacity: 0, y: "+=100" },
    { opacity: 1, y: 0, duration: 1, immediateRender: false }
  );
});
gsap.utils.toArray(".planets__span").forEach((el, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "center bottom",
      toggleActions: "play none none reverse",
    },
  });

  tl.set(el, { transformOrigin: "center center" }).fromTo(
    el,
    { opacity: 0, x: "-=100" },
    { opacity: 1, x: 0, duration: 1, delay: 0.5, immediateRender: false }
  );
});
