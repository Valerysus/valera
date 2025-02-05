const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.clientWidth;
    const maxY = window.innerHeight - noBtn.clientHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});
