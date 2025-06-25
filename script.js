let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? '1' : '0';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // troca a cada 5 segundos

// Mostrar o primeiro slide ao carregar
showSlide(currentSlide);


// Validação simples do formulário
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  this.reset();
});
