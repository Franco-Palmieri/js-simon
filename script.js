function isInArray(array, element) {
    for (var x = 0; x < array.length; x++) {
        if (element === array[x]) {
            return true;
        }
    }
    return false;
}
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
// NUMERI RANDOMICI GENERATI DAL PC
var randomNums = [];
 
while (randomNums.length < 5){ //5 numeri
    var num = getRandomNum(1, 100);
    if (!isInArray(randomNums, num)){ //se il numero non è presente nell'array viene pushato
        randomNums.push(num);
    }        
}
alert(randomNums);
// NUMERI INSERITI DALL'UTENTE
var userNums = [];

for(x = 0; x < 5; x++){
    var clock = setTimeout(function () {
        var userNum = parseInt(prompt("inserisci numero"));
        
        if(!isInArray(userNums, userNum)){
            
            if(isInArray(randomNums, userNum)){
                userNums.push(userNum);
            }

        }else{
            alert("il numero è gia stato inserito")
        }
    },3000);
}

console.log(userNums);
console.log(randomNums)

if(userNums.length == 5){
    document.getElementById("result").innerHTML = "HAI VINTO I NUMERI ERANO: " + userNums;
}else{
    alert("funziona?")
}