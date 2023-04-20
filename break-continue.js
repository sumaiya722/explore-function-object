var i = 0;
while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}
//  array 
var numbers = [52, 67, 89, 90];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number > 100) {
        break;
    }
}
