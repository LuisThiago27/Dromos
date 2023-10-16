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


// Incrementando animação dos números 

// Função para verificar se o elemento está visível na janela
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para atualizar os números
function updateNumbers() {
  const investmentElement = document.getElementById('investment');
  const salesElement = document.getElementById('sales');
  const revenueElement = document.getElementById('revenue');
  const roasElement = document.getElementById('roas');
  const roasPercentageElement = document.getElementById('roasPercentage');

  const targetInvestment = 26248.73;
  const targetSales = 3380;
  const targetRevenue = 265267.61;
  const targetROAS = 10.11;
  const targetROASPercentage = 1.011;

  let currentInvestment = 22048.73;
  let currentSales = 1000;
  let currentRevenue = 261000.61;
  let currentROAS = 0;
  let currentRoasPercentage = 0;

  const increment = 10;
  const interval = 1;

  const incrementSmall = 0.6;
  const intervalSlow = 100;

  const updateInvestment = () => {
    currentInvestment += increment;

    if (currentInvestment > targetInvestment) {
      currentInvestment = targetInvestment;
      clearInterval(animationInterval);
    }

    investmentElement.textContent = formatCurrency(currentInvestment);
  }

  const updateSales = () => {
    currentSales += increment;

    if (currentSales > targetSales) {
      currentSales = targetSales;
      clearInterval(animationIntervalSales);
    }

    salesElement.textContent = `${currentSales.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 3 })} vendas`;
  }

  const updateRevenue = () => {
    currentRevenue += increment;

    if (currentRevenue > targetRevenue) {
      currentRevenue = targetRevenue;
      clearInterval(animationIntervalRevenue);
    }

    revenueElement.textContent = formatCurrency(currentRevenue);
  }

  const updateRoas = () => {
    currentROAS += incrementSmall;

    if (currentROAS > targetROAS) {
      currentROAS = targetROAS;
      clearInterval(animationIntervalRoas);
    }

    roasElement.textContent = formatCurrency(currentROAS);
  }

  const formatCurrency = (number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
  };

  const updateRoasPercentage = () => {
    currentRoasPercentage += incrementSmall;

    if (currentRoasPercentage > targetROASPercentage) {
      currentRoasPercentage = targetROASPercentage;
      clearInterval(animationIntervalRoasPercentage);
    }

    roasPercentageElement.textContent = (currentRoasPercentage / 100).toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 3, maximumFractionDigits: 3 });
  }


  const animationInterval = setInterval(updateInvestment, interval);
  const animationIntervalSales = setInterval(updateSales, interval);
  const animationIntervalRevenue = setInterval(updateRevenue, interval);
  const animationIntervalRoas = setInterval(updateRoas, intervalSlow);
  const animationIntervalRoasPercentage = setInterval(updateRoasPercentage, intervalSlow);
}


// Verifica quando a seção está visível e inicia a animação
window.addEventListener('scroll', function () {
  const sectionElement = document.querySelector('.container-text-case');

  if (isElementInViewport(sectionElement)) {
    updateNumbers();
    window.removeEventListener('scroll', this);
  }
});