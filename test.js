const evenNumber = [];

function evenNum(num) {
  if (num > 50 || num < 1) {
    return;
  }
  if (num % 2 === 0) {
    evenNumber.push(num);
    return evenNumber;
  }
}
