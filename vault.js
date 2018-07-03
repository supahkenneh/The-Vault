'use strict';
module.exports = function() {
  return {
      setValue: setValue,
      getValue: getValue,
  }

  var obj = {};

  function setValue(key, value){
    obj[key] = value;
  }

  function getValue(key){
    if (!key || !obj.hasOwnProperty(key)){
        return null;
        }else{
        return obj[key];
        }
    }
};