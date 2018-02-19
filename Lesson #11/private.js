module.exports = (data, propToMakePrivate) => {
  return new Proxy(data, {
    get: function(target, prop) {
      if (prop === propToMakePrivate) return undefined;
      return target[prop];
    }
  });
};
