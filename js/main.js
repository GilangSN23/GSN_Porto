// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled"); // Tambah efek saat di-scroll
  } else {
    navbar.classList.remove("scrolled"); // Balik ke normal kalau di atas
  }
});
