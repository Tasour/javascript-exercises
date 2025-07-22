const repeatString = function(text, times) {
    if (times < 0) {
        return "ERROR";
    }
    let end_text = "";
    for (let index = 0; index < times; index++) {
        end_text += text;
    }
    return end_text;
};


// Do not edit below this line
module.exports = repeatString;
