

const recursiveMin = (array) => {
  const len = array.length;
  if (len === 1) {
    return array[0];
  } if (array[len - 1] > array[len - 2]) {
    array.splice(len - 1, 1);
  } if (array[len - 1] < array[len - 2]) {
    array.splice(len - 2, 1);
  }
  return recursiveMin(array);
};
