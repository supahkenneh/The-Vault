'use strict';
module.exports = function() {
  var obj = {};

    return {
         setValue: setValue,
         getValue: getValue,
    }

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