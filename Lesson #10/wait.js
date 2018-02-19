module.exports = milisecondsToWait => {
  return new Promise(resolve => {
    setTimeout(resolve, milisecondsToWait);
  });
};
