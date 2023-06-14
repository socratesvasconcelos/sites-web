function verificarConsentimento() {
    if (localStorage.getItem('cookieConsentido')) {

        armazenarInputsNosCookies();
    } else {

        alert('Este site utiliza cookies para melhorar a sua experiência.');
        localStorage.setItem('cookieConsentido', true);
        armazenarInputsNosCookies();
    }
}


function armazenarInputsNosCookies() {
    const inputs = document.querySelectorAll('.input');
    inputs.forEach((input) => {
        const nomeInput = input.id;
        const valorInput = input.value;
        document.cookie = `${nomeInput}=${valorInput}`;
    });
}


verificarConsentimento();
