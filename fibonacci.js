const FIRST_POSITION = 0;
const _getFibonacciNumbers = (index) => {
  if (index < 2){
    return index
  }
  return _getFibonacciNumbers(index -2) + _getFibonacciNumbers(index -1);
};
const _isLessThanZero = (number) => {
  return number < 0;
};
const _printFibonacciNumbers = (FibonacciNumbers) => {
  console.log(_getFibonacciNumbers(FibonacciNumbers))
}
const getFibonacciSequence = (positionQuantity) => {
  if (_isLessThanZero(positionQuantity)){
    return _getFibonacciNumbers(FIRST_POSITION);
  }
  _printFibonacciNumbers(positionQuantity);
  const previousPosition = positionQuantity - 1;
  return getFibonacciSequence(previousPosition);
};