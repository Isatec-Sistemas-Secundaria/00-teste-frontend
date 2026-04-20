const button = document.getElementById('tema');
const palco = document.querySelector('main');

button.addEventListener('click', () => {
    if (palco.classList.contains('dark')) {
        palco.classList.remove('dark');
        button.innerHTML = "🌕";
        button.style.backgroundColor = "#2563ea"
    } else {
        palco.classList.add('dark');
        button.innerHTML = "☀️";
        button.style.backgroundColor = "#5ea6f3"
    }
});