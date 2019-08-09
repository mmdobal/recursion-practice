
const recursiveCount = (array) => {
  if (array[0] === undefined) {
    return 0;
  }
  const newArr = array.splice(1);
  return 1 + recursiveCount(newArr);
};
