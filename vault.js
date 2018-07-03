'use strict';
module.exports = function() {
  return {
      setValue: setValue,
      getValue: getValue,
  }

  function setValue(key, value){
    var value = key;
  }

  function getValue(key){
    if(!!key){
        return value;
    }else{
        return null;
    }
  }
};