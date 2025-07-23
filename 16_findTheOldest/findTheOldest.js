const findTheOldest = function(people_obj) {
    let oldestPerson = null;
    let oldestAge = 0;
    for (let i = 0; i < people_obj.length; i++) {
        let person = people_obj[i];
        let death = person.yearOfDeath || new Date().getFullYear();
        let age = death - person.yearOfBirth;

        if (age > oldestAge) {
            oldestPerson = person;
            oldestAge = age;
        }
    }
    return oldestPerson;
};



// Do not edit below this line
module.exports = findTheOldest;
