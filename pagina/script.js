document.addEventListener('DOMContentLoaded', function() {
  const cartaOverlay = document.getElementById('carta-overlay');
  const cartaCerrada = document.querySelector('.carta-cerrada');
  const cartaAbierta = document.querySelector('.carta-abierta');

  cartaOverlay.style.display = 'flex';

  cartaOverlay.addEventListener('click', function() {
    cartaCerrada.style.display = 'none';
    cartaAbierta.style.display = 'block';

    setTimeout(() => {
      cartaOverlay.style.opacity = '0';
      setTimeout(() => {
        cartaOverlay.style.display = 'none';
      }, 1000);
    }, 1000);

    initPageEffects();
  });

  function initPageEffects() {
    const music = document.getElementById('backgroundMusic');
    music.volume = 0.3;
    music.play().catch(() => {
      document.body.addEventListener('click', () => music.play(), { once: true });
    });

    const noBtn = document.getElementById('noBtn');
    const preguntaSection = document.getElementById('pregunta');

    noBtn.addEventListener('mouseover', function() {
      const sectionRect = preguntaSection.getBoundingClientRect();
      const btnWidth = this.offsetWidth;
      const btnHeight = this.offsetHeight;
      const maxX = sectionRect.width - btnWidth - 20;
      const maxY = sectionRect.height - btnHeight - 20;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      this.style.position = 'absolute';
      this.style.left = `${randomX}px`;
      this.style.top = `${randomY}px`;
    });

    noBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const mensaje = document.createElement('div');
      mensaje.innerHTML = '¡No puedes escapar! 😏 El "SÍ" es tu destino.';
      mensaje.style.color = '#d23669';
      mensaje.style.fontWeight = 'bold';
      mensaje.style.marginTop = '20px';
      preguntaSection.appendChild(mensaje);
    });

    document.getElementById('siBtn').addEventListener('click', function() {
      window.location.href = "si.html";
    });

    document.querySelectorAll('.reasons-list li').forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.02)';
      });
      item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
      });
    });
  }
});
