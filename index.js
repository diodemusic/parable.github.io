function parableEncrypt() {

    var CryptoJS = require("crypto-js");
    var key = "sfdgNYRT4gn64J%^nm^&nm4Bh345n46ncvbCVbcVb24£5634#46n64N64H£gnv42w'fvl";
    var userInput = document.getElementById("encryptTextField").value;

    if (userInput) {

        var encrypted = CryptoJS.AES.encrypt(userInput, key).toString();
        document.getElementById("encryptTextField").value = encrypted;

    } else { document.getElementById("encryptTextField").value = ""; }
}

function parableDecrypt() {

    var CryptoJS = require("crypto-js");
    var key = "sfdgNYRT4gn64J%^nm^&nm4Bh345n46ncvbCVbcVb24£5634#46n64N64H£gnv42w'fvl";
    var userInput = document.getElementById("decryptTextField").value;

    if (userInput) {

        var bytes = CryptoJS.AES.decrypt(userInput, key);
        var decrypted = bytes.toString(CryptoJS.enc.Utf8);
        document.getElementById("decryptTextField").value = decrypted;

    } else { document.getElementById("decryptTextField").value = ""; }
}

function copyEncryptedText() {

    var Copy = require("copy-to-clipboard");
    var copyText = document.getElementById("encryptTextField");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    Copy(copyText.value);

}

function copyDecryptedText() {
    
    var Copy = require("copy-to-clipboard");
    var copyText = document.getElementById("decryptTextField");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    Copy(copyText.value);

    copyText.se

}

var button = document.getElementById("encryptButton");
button.addEventListener("click", parableEncrypt);

var button = document.getElementById("decryptButton");
button.addEventListener("click", parableDecrypt);


var button = document.getElementById("encryptCopyButton");
button.addEventListener("click", copyEncryptedText);

var button = document.getElementById("decryptCopyButton");
button.addEventListener("click", copyDecryptedText);
