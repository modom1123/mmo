// ============================================
// SCROLL TO ROW 5 (Category Cards)
// Called when clicking "Click Here" or Arrow
// ============================================
function scrollToRow5() {
    document.getElementById('categories').scrollIntoView({
        behavior: 'smooth'
    });
}

// ============================================
// HIGHLIGHT CURRENT NAV LINK
// ============================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.style.color = '#D4B83D';
        }
    });
}

// ============================================
// PRELOAD HOVER IMAGES
// Makes hover transitions smoother
// ============================================
function preloadHoverImages() {
    const hoverImages = document.querySelectorAll('.img-block .hover');
    hoverImages.forEach(img => {
        const preload = new Image();
        preload.src = img.src;
    });
}

// ============================================
// RUN ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    preloadHoverImages();
});
