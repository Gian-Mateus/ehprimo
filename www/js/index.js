document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function checkPrime() {
    var number = parseInt(document.getElementById("number").value);
    var isPrime = true;
    
    if (number <= 1) {
        isPrime = false;
    } else {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    if (isPrime) {
        document.getElementById("result").innerHTML = number + " é um número primo.";
    } else {
        document.getElementById("result").innerHTML = number + " não é um número primo.";
    }
}
