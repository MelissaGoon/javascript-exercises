const removeFromArray = function(array, ...args) {

    // for (let arg of args) {
    //     while (array.includes(arg)) {
    //         let index = array.indexOf(arg)
    //         array.splice(index,1)
    //     }
    // }

    // return array

    return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
