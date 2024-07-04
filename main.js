//**************Task 1
// const numberAnswers = Number(
//   prompt("Введите число которое хотите возвести в куб:")
// );
// function numberCubing(numberAnswers) {
//   return numberAnswers * numberAnswers * numberAnswers;
// }
// console.log(
//   `${numberAnswers} возведённое в куб = ${numberCubing(numberAnswers)}`
// );
//************Task 2
// const amountSalary = Number(prompt("Введите размер заработной платы:"));

// const taxDeduction = (amount) => amountSalary - (amount / 100) * 13;

// if (isNaN(amountSalary)) {
//   alert("Значение задано неверно.");
// } else {
//   alert(
//     `Размер заработной платы за вычетом налогов равен ${taxDeduction(
//       amountSalary
//     )}`
//   );
// }
//****************Task 3
// const numberOne = Number(prompt("Введите первое число:"));
// const numberTwo = Number(prompt("Введите второе число:"));
// const numberThree = Number(prompt("Введите третье число:"));

// const maxNumber = (numOne, numTwo, numThree) => {
//   let max;
//   numOne > numTwo ? (max = numOne) : (max = numTwo);
//   return numThree > max ? (max = numThree) : (max = max);
// };

// if (isNaN(numberOne) || isNaN(numberTwo) || isNaN(numberThree)) {
//   alert("Значение задано неверно.");
// } else {
//   alert(`Максимальное число = ${maxNumber(numberOne, numberTwo, numberThree)}`);
// }
//***************Task 4
const numberOne = Number(prompt("Введите первое число:"));
const numberTwo = Number(prompt("Введите второе число:"));

const adding = (numOne, numTwo) => numOne + numTwo;
const multiplicaton = (numOne, numTwo) => numOne * numTwo;
const division = (numOne, numTwo) => numOne / numTwo;
const difference = (numOne, numTwo) => {
  if (numOne === numTwo) {
    return 0;
  } else if (numOne < numTwo) {
    return numTwo - numOne;
  } else {
    return numOne - numTwo;
  }
};

console.log(difference(numberOne, numberTwo));
