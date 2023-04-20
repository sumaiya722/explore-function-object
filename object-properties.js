var computer = {
    price: 29000,
    storage: "156gb",
    processor: "intel i5"
};
// console.log(computer); 
// console.log(computer.storage); // j kono 1ta properties jodi dekhte chai..
// set a object property value 
computer.price = 22000;
computer['price'] = 23000; //arekta way price set korar...ami jodi 2bar set kori tahole sese ja set korbo setai output e ashbe..
var priceProperty = 'price'; // arekta way 
computer[priceProperty] = 19000;
console.log(computer);