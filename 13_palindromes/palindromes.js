const palindromes = function (input) {
    input = input
      .toLowerCase()
      .replace(/[^a-z0-9]/g, ""); // Garde lettres et chiffres, enlève ponctuation et espaces

    let len = input.length;
    for (let i = 0; i < len / 2; i++) {
        if (input[i] !== input[len - 1 - i]) {
            return false;
        }
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
