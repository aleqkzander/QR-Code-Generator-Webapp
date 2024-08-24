QRCode.toCanvas(document.getElementById('qrcode'), link, { width: 200 }, function (error) {
    if (error) {
        console.error('Error generating QR code:', error);
    } else {
        console.log('QR code generated successfully.');
        document.getElementById('download-btn').classList.remove('hidden');
    }
});