
const calculator = 3;
const firstNumber = 22;

const secondNumber = 23;

switch (calculator) {
  case 1:
    console.log(firstNumber + secondNumber);
    break;
  case 2:
    console.log(firstNumber - secondNumber);
    break;
  case 3:
    console.log(firstNumber * secondNumber);
    break;
  case 4:
    console.log(firstNumber / secondNumber);
    break;
  default:
    console.log("invalid number");
    break;
}
