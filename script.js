const tabTitles = document.querySelectorAll(".container-tab-title");

tabTitles.forEach((tabTitle) => {
  tabTitle.addEventListener("click", () => {
    const tabId = tabTitle.id;
    const id = tabId.slice("container-tab-title-".length);
    const drop = document.getElementById(`container-tab-content-${id}`);
    const textTab = document.querySelector(`#${tabId}`);
    const spanClosed = document.querySelector(`#${tabId} span .toggle-icon-closed`);
    const spanOpened = document.querySelector(`#${tabId} span .toggle-icon-opened`);
    

    if (drop.classList.contains("hidden")) {
        drop.classList.remove("hidden");
        textTab.style.color = "#219ebc";
        spanClosed.classList.add("hidden");
        spanOpened.classList.remove("hidden");
    } else {
        drop.classList.add("hidden");
        textTab.style.color = "#fff";
        spanOpened.classList.add("hidden");
        spanClosed.classList.remove("hidden");
    }
  });
});

// Carregue a animação Lottie usando o CDN do LottieFiles
bodymovin.loadAnimation({
  container: document.getElementById('lottie-animation'),
  renderer: 'svg', // ou 'canvas' se preferir
  loop: true, // Defina como false se não quiser que a animação repita
  autoplay: true, // Defina como false se não quiser que a animação comece automaticamente
  path: 'images/animation-background.json' // Substitua pelo URL do seu arquivo JSON baixado do LottieFiles
});


const logoContainer = document.getElementById('container-img-rocket');
        
logoContainer.addEventListener('mouseenter', () => {
    logoContainer.style.animationPlayState = 'running';
});

logoContainer.addEventListener('mouseleave', () => {
    logoContainer.style.animationPlayState = 'paused';
});
