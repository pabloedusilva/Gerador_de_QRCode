const urlInput = document.getElementById('url');
const sizeInput = document.getElementById('size');
const colorInput = document.getElementById('color');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const sizeValue = document.getElementById('sizeValue');
const qrcodeDiv = document.getElementById('qrcode');

sizeInput.addEventListener('input', () => {
    sizeValue.textContent = `${sizeInput.value}x${sizeInput.value}`;
});

generateBtn.addEventListener('click', () => {
    const url = urlInput.value;
    const size = parseInt(sizeInput.value);
    const color = colorInput.value;

    if (url) {
        qrcodeDiv.innerHTML = '';
        qrcodeDiv.className = 'fade-in';
        
        new QRCode(qrcodeDiv, {
            text: url,
            width: size,
            height: size,
            colorDark: color,
            colorLight: "#FFFFFF",
            correctLevel: QRCode.CorrectLevel.H
        });

        downloadBtn.style.display = 'block';
    }
});

downloadBtn.addEventListener('click', () => {
    const qrImage = qrcodeDiv.querySelector('img');
    if (qrImage) {
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = qrImage.src;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});