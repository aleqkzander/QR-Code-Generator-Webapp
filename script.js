document.getElementById('qr-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting/reloading the page

    const link = document.getElementById('link').value;
    const qrCodeContainer = document.getElementById('qrcode');
    
    // Clear any previous QR code by emptying the container
    qrCodeContainer.innerHTML = ''; 

    // Ensure the link is not empty before generating the QR code
    if (link.trim() === '') {
        console.error('Please enter a valid URL');
        return;
    }

    // Create a new canvas element
    const canvas = document.createElement('canvas');
    qrCodeContainer.appendChild(canvas);

    // Generate new QR code - pass the canvas to toCanvas method
    QRCode.toCanvas(canvas, link, { width: 200 }, function (error) {
        if (error) {
            console.error('Error generating QR code:', error);
        } else {
            console.log('QR Code generated successfully.');
            document.getElementById('download-btn').classList.remove('hidden');
        }
    });
});

document.getElementById('download-btn').addEventListener('click', function () {
    const qrCanvas = document.querySelector('#qrcode canvas');
    const link = document.createElement('a');
    link.href = qrCanvas.toDataURL('image/png');
    link.download = 'qrcode.png';
    link.click();
});