#!/usr/bin/node
exports.esrever = function (list) {
  return list.reduceRight(function (array, current) {
    array.push(current);
    return array;
  }, []);
};

esreverX = list => {
    const newList =[];
    for( let i = list.length - 1; i >= 0; i--) {
        newList.push(list[i])

    }
    return newList
}