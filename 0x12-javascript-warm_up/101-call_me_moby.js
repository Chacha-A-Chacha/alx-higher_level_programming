#!/usr/bin/node
exports.callMeMoby = function (x, theFunction) {
  for (let i = 0; i < x; i++) theFunction();
};

export function call_me_moby(x, theFunction ) {
    for (let i = 0; i < x; i++) theFunction();
    while (x > 0) {
        theFunction();
        x--;
    }
}
