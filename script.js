
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

var randomNums = [];
 
while (randomNums.length < 5){ //5 numeri
    var num = getRandomNum(1, 100);
    if (!isInArray(randomNums, num)){ //se il numero non è presente nell'array viene pushato
        randomNums.push(num);
    }        
}
alert(randomNums);

