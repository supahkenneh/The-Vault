'use strict';
module.exports = function () {
  const vaultObj = {};

  return {
    setValue: setValue,
    getValue: getValue,
  }

  function setValue(key, value) {
    vaultObj[key] = value;
  }

  function getValue(key) {
    if (!key || !vaultObj[key]) {
      return null;
    } else {
      return vaultObj[key];
    }
  }
};