#!/usr/bin/node
exports.addMeMaybe = function (number, theFunction) {
  theFunction(number) {
    return number +=1;
  };
};
