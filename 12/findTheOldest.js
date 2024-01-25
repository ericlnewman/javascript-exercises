const findTheOldest = function(persons) {
  // create an object with the name as a key and the age as the value from the array of objects
  const findAge = persons.reduce((obj, person)=>{
    // check if the yearOfDeath is not null
    if(person.yearOfDeath != null){
    
      obj[person.name] = person.yearOfDeath - person.yearOfBirth;
    } else {
      const d  = new Date().getFullYear();
      obj[person.name] = d - person.yearOfBirth;
    }
    return obj;
  }, {});
  // variables to hold the age for comparison and assign the key to the current oldes
  let age = 0;
  let nameOfOldest = "";
  //loop through the object from the findAge that uses reduce 
  for(let name in findAge){
    if(findAge.hasOwnProperty(name)){
      let current = findAge[name];
      if(current > age){
        age = current;
        nameOfOldest = name;
      }
    }
  }
  // return the oldest person
  return nameOfOldest;
};
// Do not edit below this line
module.exports = findTheOldest;