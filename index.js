function parableEncrypt() {

    var CryptoJS = require("crypto-js");
    var key = document.getElementById("passphraseTextField").value;
    var userInput = document.getElementById("encryptTextField").value;

    if (userInput) {

        var encrypted = CryptoJS.AES.encrypt(userInput, key).toString();
        document.getElementById("encryptTextField").value = encrypted;

    } else { document.getElementById("encryptTextField").value = ""; }
}

function parableDecrypt() {

    var CryptoJS = require("crypto-js");
    var key = document.getElementById("passphraseTextField").value;
    var userInput = document.getElementById("decryptTextField").value;

    if (userInput) {

        var bytes = CryptoJS.AES.decrypt(userInput, key);
        var decrypted = bytes.toString(CryptoJS.enc.Utf8);
        document.getElementById("decryptTextField").value = decrypted;

    } else { document.getElementById("decryptTextField").value = ""; }
}

function copyEncryptedText() {

    var copy = require("copy-to-clipboard");
    var copyText = document.getElementById("encryptTextField");
    copy(copyText.value);

}

var button = document.getElementById("encryptButton");
button.addEventListener("click", parableEncrypt);

var button = document.getElementById("decryptButton");
button.addEventListener("click", parableDecrypt);


var button = document.getElementById("encryptCopyButton");
button.addEventListener("click", copyEncryptedText);
