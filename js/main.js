// Modal para ampliar imagens
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const portfolioImages = document.querySelectorAll(".portfolio-img");
const closeBtn = document.getElementsByClassName("close")[0];

portfolioImages.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Fechar modal clicando fora da imagem
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Smooth scroll para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});