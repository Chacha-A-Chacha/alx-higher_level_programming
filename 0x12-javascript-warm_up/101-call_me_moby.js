#!/usr/bin/node
exports.callMeMoby = function (x, theFunction) {
  for (let i = 0; i < x; i++) theFunction();
};

exports.call_me_moby = function (x, theFunction ) {
    
    while (x > 0) {
        theFunction();
        x--;
    }
}
