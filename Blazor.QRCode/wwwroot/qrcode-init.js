function initQrReader(elementId) {
    var html5QrcodeScanner = new Html5QrcodeScanner(
        elementId, { fps: 10, qrbox: 250 });

    html5QrcodeScanner.render(function (qrCodeMessage) {
        DotNet.invokeMethodAsync('Blazor.QRCode', 'OnSuccess',
            qrCodeMessage);
    }, function (errorMessage) {
        DotNet.invokeMethodAsync('Blazor.QRCode', 'OnFailed',
            qrCodeMessage);
    });

}

function initQrCode(elementId, text, width, height) {
    new QRCode(document.getElementById(elementId),
        {
            text: text,
            width: width,
            height: height
        });
}
