const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', function() {
    window.location.href = 'yes.html';
});

noBtn.addEventListener('click', function() {
    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 300 - 150;
    
    noBtn.style.position = 'relative';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});