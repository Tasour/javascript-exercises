const getTheTitles = function(object) {

    let title_array = []
    for (let index = 0; index < object.length; index++) {
        title_array.push(object[index]['title'])
    }
    return title_array
};

// Do not edit below this line
module.exports = getTheTitles;
