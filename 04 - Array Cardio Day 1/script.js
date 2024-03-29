// Array Cardio Day 1
// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// GLobal Functions
const printInvestors = (data, outputNumber) => {
  return data.map(inventor => outputNumber.append(`"${inventor.first} ${inventor.last}" \n`));
 };

//  Exercises
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteenCenturyInventors = inventors.filter(inventor => (1500 <= inventor.year && inventor.year <= 1599));
console.log("1.");
console.table(fifteenCenturyInventors);
const output_one = document.querySelector(".output1");
printInvestors(fifteenCenturyInventors, output_one);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const output_two = document.querySelector(".output2");
const inventorNames = inventors.map(inventor => {
  const name = `${inventor.first} ${inventor.last}`;
  output_two.append(`"${name}" \n`);
  return name;
});
console.log("2.", inventorNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const birthdaySort = inventors.sort((inventorA, inventorB) => inventorB.year - inventorA.year);
console.log("3.");    
console.table(birthdaySort);
const output_three = document.querySelector(".output3");
const names = printInvestors(birthdaySort, output_three);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const inventorLives = inventors.reduce((counter, inventor) => counter + (inventor.passed - inventor.year), 0);
const output_four = document.querySelector(".output4");
output_four.append(inventorLives); 
console.log("4.", inventorLives);

// 5. Sort the inventors by years lived
const yearsLivedSorted = inventors.sort((inventorA, inventorB) => (inventorA.passed  - inventorA.year) - (inventorB.passed  - inventorB.year));
const output_five = document.querySelector(".output5");
printInvestors(yearsLivedSorted, output_five);
console.log("5.");    
console.table(yearsLivedSorted);

// Can't uncomment cause code won't work
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
//  https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a')); // NOTE: you can call querySelector on any html object
// const de = links
//   .map(link => link.innerHTML)
//   .filter(streetName => streetName.indexOf("de") >= 0);
console.log("6. Visit https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris then paste code above into the console");

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedPeople = people.sort((persA, persB) => {
  const persALastName = persA.split(',')[0];
  const persBLastName = persB.split(',')[0];
  persALastName < persBLastName ? -1 : 1;
});

const output_seven = document.querySelector(".output7");
sortedPeople.map(person => output_seven.append(`"${person}" \n`));
console.log('7.', sortedPeople);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const reducer = (obj, item, idx, array) => {
  if(!obj.hasOwnProperty([item])) {
    obj[item] = 0;  
  } 
  
  obj[item] += 1;      
  return obj;
}

const transportation = data.reduce(reducer, {});
const keys = Object.keys(transportation);
keys.map(key => document.querySelector(".output8").append(`${key}: ${transportation[key]} \n`));
console.log('8.', transportation);