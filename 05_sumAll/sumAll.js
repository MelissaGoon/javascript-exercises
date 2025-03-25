const sumAll = function(n1,n2) {
    if (!Number.isInteger(n1) || !Number.isInteger(n2) || n1 < 0 || n2<0) {
        return "ERROR";
    }

    let nums = [n1,n2];
    nums.sort();
    let start = nums[0];
    let end = nums[1];

    let res = 0;
    for (let n = start; n <= end; n++ ) {
        res += n;
    }

    return res;


};

// Do not edit below this line
module.exports = sumAll;
