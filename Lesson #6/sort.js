const stringSort = (array, reverse) => {
  return array.sort((a, b) => {
    if (a > b && reverse) return -1;
    if (b > a && reverse) return 1;

    if (a > b) return 1;
    if (b > a) return -1;

    return 0;
  });
};

module.exports = (array, reverse) => {
  return array.sort((a, b) => {
    if (reverse) return b - a;

    return a - b;
  });
};
