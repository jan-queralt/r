// Animación de entrada al cargar la página
gsap.from("#animated-text", {
    duration: 1, // Duración de la animación en segundos
    opacity: 0, // Comienza con opacidad cero (invisible)
    y: 50, // Desplaza hacia arriba desde 50px debajo de su posición original
    ease: "power2.inOut" // Tipo de animación
  });
  
  // Animación al hacer clic en el texto
  document.getElementById("animated-text").addEventListener("click", function() {
    gsap.to("#animated-text", {
      duration: 1, // Duración de la animación en segundos
      rotation: 360, // Rotación completa
      scale: 1.5, // Escalado al 150% del tamaño original
      ease: "elastic.out(1, 0.3)" // Tipo de animación elástica
    });
  });
  