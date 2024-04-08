// Función para generar un corazón en una posición aleatoria
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
    heart.style.animationDuration = Math.random() * 2 + 1 + 's'; // Duración de la animación aleatoria
    document.getElementById('heart-container').appendChild(heart);
    // Eliminar el corazón después de que termine la animación
    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }
  
  // Generar un nuevo corazón cada cierto intervalo de tiempo
  setInterval(createHeart, 300);
  