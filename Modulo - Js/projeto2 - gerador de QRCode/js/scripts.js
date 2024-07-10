const container = document.querySelector(".container");

const qrCodeBtn = document.querySelector('#qr-form button');

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");
const generateQrCode = () => {
    const valorRecebido = qrCodeInput.value;
    if (!valorRecebido) return;
    console.log(valorRecebido);
    qrCodeBtn.textContent = "Gerando código..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valorRecebido}`;

    qrCodeImg.addEventListener('load', () => {
        container.classList.add("active");
        qrCodeBtn.textContent = "Código gerado!"
    })

}
qrCodeBtn.addEventListener('click', () => {
    generateQrCode();
})


qrCodeInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        generateQrCode();
    }
})

qrCodeInput.addEventListener('keyup', (e) => {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.textContent = "Gerar QR Code"
    }
})