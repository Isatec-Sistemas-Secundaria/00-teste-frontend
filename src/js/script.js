
    function toggle() {
        event.preventDefault();

        let input_toggle = document.getElementById('toggle_button')
        let password_input = document.getElementById('validationCustom02')

        if (password_input.type === 'password') {
            password_input.type = 'text'
            toggle_button.innerHTML = `
<i class="fa-solid fa-eye-slash"></i>`
        } else {
            password_input.type = 'password'
            toggle_button.innerHTML = `
<i class="fa-solid fa-eye"></i>`
        }
    }



    (() => {
        'use strict'


        const forms = document.querySelectorAll('.needs-validation')


        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()


document.addEventListener('DOMContentLoaded', function() {
    const btnTema = document.getElementById('btn-tema');
    const htmlElement = document.documentElement;
    const icone = document.getElementById('icone-tema');

    // 1. AO CARREGAR: Verifica se o usuário já tinha escolhido o tema dark antes
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'dark') {
        aplicarTemaEscuro();
    }

    if (btnTema) {
        btnTema.addEventListener('click', function() {
            const temaAtual = htmlElement.getAttribute('data-bs-theme');
            
            if (temaAtual === 'dark') {
                aplicarTemaClaro();
            } else {
                aplicarTemaEscuro();
            }
        });
    }

    function aplicarTemaEscuro() {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('tema', 'dark'); // Salva a escolha
        if (icone) icone.classList.replace('fa-moon', 'fa-sun');
    }

    function aplicarTemaClaro() {
        htmlElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('tema', 'light'); // Salva a escolha
        if (icone) icone.classList.replace('fa-sun', 'fa-moon');
    }
});
