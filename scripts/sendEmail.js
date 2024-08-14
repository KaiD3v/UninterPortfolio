document.addEventListener('DOMContentLoaded', () => {
    const popUp = document.getElementById('pop-up');
    const sendBtn = document.getElementById('send-btn');
    const closeBtn = document.querySelector('.close-btn');
    const confirmBtn = document.querySelector('.confirm-btn');

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const checkBox = document.querySelector("#checkbox");

    const namePopUp = document.querySelector("#name-popup");
    const emailPopUp = document.querySelector("#email-popup");
    const messagePopUp = document.querySelector("#message-popup");

    sendBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (!checkBox.checked) {
            alert('Por favor, confirme o envio marcando a caixa de seleção.');
            return; 
        }

        popUp.style.display = 'flex';

        namePopUp.innerText = nameInput.value;
        emailPopUp.innerText = emailInput.value;
        messagePopUp.innerText = messageInput.value;
    });

    closeBtn.addEventListener('click', () => {
        popUp.style.display = 'none';
    });

    confirmBtn.addEventListener('click', () => {
        popUp.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popUp) {
            popUp.style.display = 'none';
        }
    });
});
