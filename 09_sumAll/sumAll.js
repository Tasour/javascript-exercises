const sumAll = function(b_inf, b_sup) {
    if (b_inf > b_sup) {
        [b_sup, b_inf] = [b_inf, b_sup]
    }
    if (!Number.isInteger(b_inf) || b_inf <= 0 || !Number.isInteger(b_sup) || b_sup <= 0) {
        return "ERROR";
    }

    let nb_sumAll = 0
    for (let index = b_inf; index <= b_sup; index++) {
        nb_sumAll+=index
    }
    return nb_sumAll
};

// Do not edit below this line
module.exports = sumAll;
