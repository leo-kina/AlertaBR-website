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

//modo claro, escuro e daltônico
const darkBtn = document.getElementById('darkModeBtn');
const lightBtn = document.getElementById('lightModeBtn');
const daltonicoBtn = document.getElementById('daltonicoModeBtn');
const daltonicoText = document.querySelector('.hidden');

function clearThemes() {
  document.body.classList.remove('dark-mode', 'light-mode', 'daltonico-mode');
  daltonicoText.classList.add('hidden');  // Esconde o texto sempre que limpar tema
}

darkBtn.addEventListener('click', () => {
  clearThemes();
  document.body.classList.add('dark-mode');
});

lightBtn.addEventListener('click', () => {
  clearThemes();
  document.body.classList.add('light-mode');
});

daltonicoBtn.addEventListener('click', () => {
  clearThemes();
  document.body.classList.add('daltonico-mode');
  daltonicoText.classList.remove('hidden');  // Mostra o texto só no daltonico
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

  const videos = document.querySelectorAll('.bgVideo');
  let current = 0;

  function showSlide(index) {
    videos.forEach((video, i) => {
      video.classList.toggle('active', i === index);
    });
  }

  showSlide(current); // mostrar o primeiro

  setInterval(() => {
    current = (current + 1) % videos.length;
    showSlide(current);
  }, 5000); // troca a cada 5 segundos

