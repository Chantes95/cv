
// Movil
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu-items').classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = carousel.querySelectorAll(".slide");
    const numSlides = slides.length;
    let currentIndex = 0;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % numSlides;
        carousel.style.transition = "none"; // Eliminar la transición para un desplazamiento instantáneo
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Clonar el primer slide y añadirlo al final
        const clonedSlide = slides[0].cloneNode(true);
        carousel.appendChild(clonedSlide);
        
        // Desplazar el carrusel
        setTimeout(() => {
            carousel.style.transition = "transform 0.5s ease"; // Restaurar la transición
            carousel.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`; // Desplazar al siguiente slide
        }, 50); // Esperar un breve momento antes de restablecer la transición
    }, 5000); // Cambiar el valor de 5000 por el tiempo que quieras para el desplazamiento automático
});



// Función para generar la barra de progreso dinámicamente con animación
function generarBarraDeProgreso(idBarra, porcentaje) {
  var barraElemento = document.getElementById(idBarra);
  barraElemento.style.width = porcentaje + '%';
}

// Función para verificar si un elemento está visible en la ventana del navegador
function estaEnPantalla(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para activar la animación cuando un elemento está visible en la pantalla
function activarAnimacion() {
  var sections = document.querySelectorAll('.image-with-barra');
  sections.forEach(function(section, index) {
    if (estaEnPantalla(section)) {
      setTimeout(function() {
        generarBarraDeProgreso('barra' + (index + 1), parseInt(section.querySelector('.barra').textContent));
      }, 500 * index); // Retraso de 500 milisegundos (0.5 segundos) entre cada sección
    }
  });
}

// Activar la animación cuando se desplaza la página
window.addEventListener('scroll', activarAnimacion);
// Activar la animación cuando se carga la página
window.addEventListener('load', activarAnimacion);


// Galeria de img

document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach(function(item) {
    item.addEventListener("click", function() {
      // Implementa la lógica para mostrar la imagen en un modal o lightbox
      // Por ejemplo, puedes abrir una ventana modal con la imagen ampliada
      // O cambiar la imagen en un área específica de la página
      console.log("Haz clic en la imagen:", item.querySelector("img").src);
    });
  });
});



// galeria


function openModal(imageUrl) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imageUrl;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}


