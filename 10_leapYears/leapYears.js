const leapYears = function(year) {

    //Les années sont bissextiles si elles sont multiples de quatre, 
    // mais pas si elles sont multiples de cent, 
    // à l'exception des années multiples de quatre cents qui, 
    // elles, sont également bissextiles. 

    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

};

// Do not edit below this line
module.exports = leapYears;
