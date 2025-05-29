document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".hero h2");
  const img = document.querySelector(".parallax-container img");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    let offset;
    if (window.innerWidth > 768) {
      offset = scrollY * 0.5;
    } else {
      offset = scrollY * 0.15; 
    }
    title.style.transform = `translateX(${-offset}px)`;
    img.style.transform = `translateY(${scrollY * 0.2}px)`;
  });
});
