// --- BOTÓN SORPRESA ---
const btn = document.getElementById('btn-sorpresa');
const mensaje = document.getElementById('mensaje-sorpresa');

if (btn && mensaje) {
  btn.addEventListener('click', () => {
    mensaje.classList.add('mostrar');

    // Ocultar automáticamente después de 3 segundos
    setTimeout(() => {
      mensaje.classList.remove('mostrar');
    }, 3000);
  });
}

// --- NUBES COMO IMÁGENES ---
const nubesContainer = document.getElementById("nubes");
const cantidadNubes = 10; // aumenta si quieres más nubes

for (let i = 0; i < cantidadNubes; i++) {
  const nube = document.createElement("img");
  nube.src = "assets/nube.png"; // tu imagen de nube
  nube.classList.add("nube-img");

  // tamaño aleatorio
  const width = 80 + Math.random() * 80; 
  nube.style.width = `${width}px`;

  // posición vertical aleatoria
  nube.style.top = `${Math.random() * 80}vh`;

  // opacidad aleatoria
  nube.style.opacity = 0.3 + Math.random() * 0.4;

  // animación más rápida y delay reducido
  nube.style.animationDuration = `${10 + Math.random() * 15}s`;
  nube.style.animationDelay = `${Math.random() * 2}s`;

  nubesContainer.appendChild(nube);
}
