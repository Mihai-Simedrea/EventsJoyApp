const QRCode = require('qrcode')

export const generateQR = text  => {
    try {
        return QRCode.toDataURL(text);
    } catch (err) {
        console.error(err)
    }
}