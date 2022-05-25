var waypoint = new Waypoint({
  element: document.getElementById("skills"),
  handler: function () {
    var progress = document.querySelectorAll(".progress-bar");
    progress[0].setAttribute("style", "width:99%;transition-duration: 1s;");
    progress[1].setAttribute("style", "width:95%;transition-duration: 2s;");
    progress[2].setAttribute("style", "width:79%;transition-duration: 3s;");
    progress[3].setAttribute("style", "width:69%;transition-duration: 4s;");
  },
  offset: "90%",
});

$(".navbar-toggler").html(
  "<i class='fas fa-bars fa-2x' style='color:var(--orange);'></i>"
);

// Sticky navigation
const nav = document.querySelector(".navbar");
const baner = document.getElementById("baner");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const banerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  treshold: 0,
  rootMargin: `-${navHeight}px`,
});
banerObserver.observe(baner);
// Prices active

const cards = document.querySelectorAll(".pricing-card");
cards.forEach((card) =>
  card.addEventListener("mouseover", function (e) {
    card.style.opacity = "1";
    // card.classList.add("price__active");
    // card.querySelector(".btn__price").classList.remove("btn--hidden");
  })
);
cards.forEach((card) =>
  card.addEventListener("mouseout", function (e) {
    card.style.opacity = "0.7";
    // card.classList.add("price__active");
    // card.querySelector(".btn__price").classList.remove("btn--hidden");
  })
);
