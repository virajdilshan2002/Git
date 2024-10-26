console.log("Variables File Is Loaded...");

// var, let, const

//VAR
var fristName = "Viraj";
let lastName = "Dilshan";
const age = 22;

// console.log(fristName);
// console.log(lastName);
// console.log(age);

function testVar() {
  //   console.log("Test Function");
  var x = 10;
  //   console.log(x);
  //   console.log(lastName);
}

testVar();
// console.log(x);

//LET
function testLet() {
  let y = 20;
  console.log(y);
  if (true) {
    let z = 30;
    console.log(z);
  }
  console.log(z);
}

testLet();

//CONST
function testConst() {
  const a = 40;
  console.log(a);
}

testConst();
