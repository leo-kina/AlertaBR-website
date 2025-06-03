document.addEventListener("DOMContentLoaded", () => {
  // Parallax
  const title = document.querySelector(".hero h2");
  const img = document.querySelector(".parallax-container img");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const offset = window.innerWidth > 768 ? scrollY * 0.5 : scrollY * 0.15;
    title.style.transform = `translateX(${-offset}px)`;
    img.style.transform = `translateY(${scrollY * 0.2}px)`;
  });

  // Menu hamburguer
 const hamburguerBtn = document.getElementById("hamburguerBtn");
const navContent = document.querySelector(".navContent");

hamburguerBtn.addEventListener("click", () => {
  navContent.classList.toggle("active");
  hamburguerBtn.classList.toggle("active"); // se quiser animar o botão também
});


  navContent.addEventListener("click", (e) => {
    if (e.target.classList.contains("item-menu")) {
      navContent.classList.remove("active");
      hamburguerBtn.classList.remove("active");
    }
  });
});
