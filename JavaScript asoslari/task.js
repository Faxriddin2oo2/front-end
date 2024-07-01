// Berilgan IP(v4) addresning himoyalangan versiyasini aniqlab qaytaradigan funksiya yozing
function secIp(ip) {
    return ip.replace(/\./g,'[.]');
}

const ip = '192.168.1.1';
const securedIp = secIp(ip);
console.log(securedIp);



// Berilgan matnning eng oxirgi so’zi uzunligini qaytaradiga funksiya yozing.
function lastWordLength(text) {
    let words = text.trim().split(" ");
    let lastWord = words[words.length - 1];    
    return lastWord.length;
}

let text = "Salom JavaScript";
let length = lastWordLength(text);
console.log(length);
