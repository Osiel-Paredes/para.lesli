document.addEventListener('DOMContentLoaded', function() {
    const colors = ['#d23669', '#ff6b81', '#ff4757', '#f8a5c2', '#fd79a8'];
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.className = 'confeti';
            confeti.style.left = Math.random() * window.innerWidth + 'px';
            confeti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confeti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(confeti);
        }, i * 30);
    }
});
