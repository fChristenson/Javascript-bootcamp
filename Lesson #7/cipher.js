module.exports = (str, val) => {
  return str
    .split("")
    .map(str => {
      return String.fromCharCode(str.charCodeAt() + val % 27);
    })
    .join("");
};
