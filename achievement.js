// Neon glow effect on scroll
window.addEventListener("scroll", () => {
    const title = document.querySelector(".achievement-title");
    title.style.textShadow = `0 0 ${20 + window.scrollY / 15}px #ff00ff, 0 0 ${40 + window.scrollY / 10}px #ff69b4`;
});
