//**************Task 1 */
const numberAnswers = Number(
  prompt("Введите число которое хотите возвести в куб:")
);

function numberCubing(numberAnswers) {
  return numberAnswers * numberAnswers * numberAnswers;
}

console.log(
  `${numberAnswers} возведённое в куб = ${numberCubing(numberAnswers)}`
);
