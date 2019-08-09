
const recursiveSum = (array) => {
  if (array === []) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }
  const first = array[0];
  const rest = array.splice(1);
  return first + recursiveSum(rest);
};
