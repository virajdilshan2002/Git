console.log("Type Conversion File Is Loaded...");

//Implicit Type Conversion (Auto)

console.log("=================Implicit Type Conversion====================");

let result = "The Answer is " + 100;
console.log(typeof result);

let sum = 50 + "450";
console.log(typeof sum);

let sub = "420" - 4;
console.log(sub);
console.log(typeof sub);

let divide = "20" / 4;
console.log(divide);
console.log(typeof divide);

let remain = "21" % 4;
console.log(remain);
console.log(typeof remain);

//Explicitly Type Conversion

console.log("=================Explicitly Type Conversion====================");

let num1 = "400";
console.log(typeof num1);

// let num2 = Number(num1);
let num2 = Number("510");
console.log(typeof num2);

let num3 = Number("22viraj");
console.log(num3);
console.log(typeof num3);

let num4 = Number("viraj");
console.log(num4);
console.log(typeof num4);

let num5 = Number(true);
console.log(num5);
console.log(typeof num5);

let num6 = Number(null);
console.log(num6);
console.log(typeof num6);

let num7 = Number(undefined);
console.log(num7);
console.log(typeof num7);

let num8 = Number(undefined);
console.log(num8); //0
console.log(typeof num8); //number

console.log("========================================================");

let num9 = parseInt("100");
console.log(num9); //100
console.log(typeof num9); //number

console.log("========================================================");

let num10 = parseInt("100.5");
console.log(num10); //NaN
console.log(typeof num10); //number

console.log("========================================================");

let num11 = parseFloat("100.5");
console.log(num11); //100.5
console.log(typeof num11); //number
