function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}

// qr code
const container = document.querySelector('.qr-overview');
const qrCode = container.querySelector('sl-qr-code');
const input = container.querySelector('sl-input');

input.value = qrCode.value;
input.addEventListener('sl-input', () => qrCode.value = input.value);
