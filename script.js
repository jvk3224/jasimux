// script.js
const backToTopBtn = document.getElementById("backToTopBtn");

// Show the button after scrolling 100px
window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Scroll back to the top when the button is clicked
backToTopBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling
    });
};


const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');
const menuIcon = document.querySelector('.menu-icon');

menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('show');
    menuIcon.classList.toggle('close');  // Toggle 'close' class on the menu icon
});
