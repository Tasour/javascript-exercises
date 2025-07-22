const reverseString = function(text) {
    let r_text = ""
    for (let index = 0; index < text.length; index++) {
        r_text += text[text.length-1-index]
    }
    return r_text
};

// Do not edit below this line
module.exports = reverseString;
