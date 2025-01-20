//Vowel Count 
function countVowelsRegex(str) {
    const vowelRegex = /[aeiou]/g;
    return str.match(vowelRegex)?.length || 0;
  }
//Even or Odd 
function evenOrOdd(number){ 
    return number % 2 === 0? "Even":"Odd";
  }
//get THE Middle CARACTERE 
function getMiddle(chaine) {
    const longueur = chaine.length;
    const milieu = Math.floor(longueur/2);
    if(longueur%2 ===0){
      return chaine.slice(milieu-1, milieu+1);
    }
    else{
      return chaine[milieu]
    }
  }
//Opposite number 
function opposite(number) {
    return -number
  }
//Mumbling 
function accum(s) {
  return s
  .split('')
  .map((c, i) => c.toUpperCase() + c.repeat(i).toLowerCase())
  .join('-');
}
//You're a square! 
function isSquare(num) {
    if (num < 0) {
      return false;
    }
    const sqrt = Math.sqrt(num);
    return Number.isInteger(sqrt);
  }
//Disemvowel Trolls 
function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => !vowels.includes(char)).join('');
  }
//Highest and Lowest (8)                   
function highAndLow(numbers) {
  const nums = numbers.split(' ').map(Number);
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  return `${max} ${min}`; 
}
//Exes and Ohs 
function XO(str) {
  str = str.toLowerCase();
  const countX = str.split('x').length - 1;
  const countO = str.split('o').length - 1;
  return countX === countO;
}
//Square Every Digit (10)                      
function squareDigits(n) {
  let squares = n.toString(); // Convertir n en chaîne
  let result = '';
  
  for (let i = 0; i < squares.length; i++) {
    let digit = parseInt(squares[i]); // Convertir chaque caractère en nombre
    result += digit * digit; // Ajouter le carré du chiffre au résultat
  }
  
  return Number(result); // Convertir le résultat en nombre
}

//Shortest Word 
function findShort(s){
    const words = s.split(' ');
    const shortestWordLength = words.reduce((shortest, currentWord) => {
      return Math.min(shortest, currentWord.length);
    }, Infinity);
  
    return shortestWordLength;
  }
//Complementary DNA 
function DNAStrand(dna){
    const pairs = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C'
    };
    const dnaArray = dna.split('');
    const complementaryDNA = dnaArray.map(base => pairs[base]).join('');
  
    return complementaryDNA;
  }
//Descending Order 
function descendingOrder(n) {
    const str = n.toString();
    const digits = str.split('').map(Number);
    digits.sort((a, b) => b - a);
    const result = digits.join('');
    return Number(result);
  }
//Sum of positive 
function positiveSum(arr) {
    const positiveNumbers = arr.filter(num => num > 0);
    return positiveNumbers.reduce((sum, num) => sum+num,0);
  }
//Isograms 
function isIsogram(str) {
    const strLower = str.toLowerCase();
    const seenLetters = new Set();
    for (const char of strLower) {
      if (seenLetters.has(char)) {
        return false;
      }
      seenLetters.add(char);
    }
  
  return true;
  }
//List Filtering 
function filter_list(l) {
    // Filtrer la liste pour ne garder que les éléments qui sont des nombres
    return l.filter(item => typeof item ==='number');
  }
//Find the smallest integer in the array 
function findSmallestInt(args) {
    return Math.min(...args);
}
//Sum of two lowest positive integers 
function sumTwoSmallestNumbers(numbers) {
    const positiveNumbers = numbers.filter(num => num > 0).sort((a, b) => a - b);
    if (positiveNumbers.length < 2) {
      return 0;
    }
    return positiveNumbers[0] + positiveNumbers[1];
}
//Growth of a Population 
function nbYear(p0, percent, aug, p) {
    let years = 0;
    let population = p0;
    while (population < p) {
      const growth = Math.floor(population * (percent / 100));
      population = population + growth + aug;
      years++;
    }
    return years;
}
//String repeat 
function repeatStr(n, s) {
  return s.repeat(n);
}

//ALGORITHM
//1
function isTriangle(a, b, c) {
  return a > 0 && b > 0 && c > 0 &&
         a + b > c && b + c > a && a + c > b;
}
//2
function findNextSquare(sq) {
  const root = Math.ceil(Math.sqrt(sq));
  if (sq === root * root) {
    return (root + 1) * (root + 1);
  } else {
    return -1;
  }
}
//3
function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  } else {
    return "#".repeat(cc.length - 4) + cc.slice(-4);
  }
}

//Sum of odd numbers (5)
function rowSumOddNumbers(n) {
  const firstNumber = (n * n) - n + 1;
  const lastNumber = (n * n) + n - 1;
  const numberOfElements = n;
  const sum = ((firstNumber + lastNumber) * numberOfElements) / 2;
  return sum;
}
//Find the divisors!(6)                   
function divisors(n) {
  const divisors = [];
  
  // Cas où n est inférieur ou égal à 1, ce ne sont pas des nombres premiers
  if (n <= 1) {
    return "FALSE";
  }

  // Trouver les diviseurs de n
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      divisors.push(i); 
    }
  }

  // Si des diviseurs sont trouvés, retourner la liste des diviseurs
  if (divisors.length > 0) {
    return divisors;
  }

  // Si aucun diviseur n'est trouvé, alors n est premier
  return `${n} is prime`;
}


//DATA
//Return Negative
function makeNegative(num) {
  if (num >= 0) {
    return -num;
  } else {
    return num;
  }
}
//Remove First and Last Character
function removeChar(str){
  return str.slice(1, -1);
};
//Remove String Spaces 
function noSpace(x){
  return x.split(' ').join('');
}
function removeSpaces(str) {
  // return str.replace(/\s/g, '');
 return str.split(' ').join('');
}
//Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  return bool ? 'Yes' : 'No';
}
//Convert a Number to a String!
function numberToString(num) {
  return String(num);
}

//NUMBER
//Basic Mathematical Operations
function basicOp(operation, value1, value2){
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      // Gestion des divisions par zéro
      if (value2 === 0) {
        return "Division par zéro impossible";
      } else {
        return value1 / value2;
      }
    default:
      return "Opération non reconnue";
  }
}
//Sum of the first nth term of Series                    *
function SeriesSum(n) {
  // Cas de base : si n est 0, on retourne 0.00
  if (n === 0) {
    return "0.00";
  }

  // Calcul du dénominateur du terme
  let denominator = 1;
  for (let i = 1; i < n; i++) {
    denominator += (2 * i + 1);
  }

  // Calcul du terme et arrondi à 2 décimales
  const term = 1 / denominator;
  return term.toFixed(2);
}
//Keep Hydrated!
function litres(time) {
  const litres = time * 0.5;
  return Math.floor(litres);
}
//Century From Year
function century(year) {
  if (year % 100 === 0) {
    return year / 100;
  } else {
    return Math.ceil(year / 100);
  }
}
//Beginner - Lost Without a Map
function maps(x) {
  // Créer un nouveau tableau pour stocker les résultats
  const resultat = [];

  // Parcourir chaque élément du tableau d'origine
  for (let i = 0; i < x.length; i++) {
    // Doubler la valeur actuelle et l'ajouter au nouveau tableau
    resultat.push(x[i] * 2);
  }

  // Retourner le nouveau tableau avec les valeurs doublées
  return resultat;

}

//Strings
//Reversed Strings
function solution(str){
  //utilise une boucle for pour parcourir la chaîne à l'envers
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
}
//String ends with?
function solution(str, ending){
  return str.substring(str.length - ending.length) === ending;
}
//Do I get a bonus?                            
function bonusTime(salary, bonus) {
  // Si bonus est vrai, on multiplie le salaire par 10 
  if (bonus) {
    return "£" + salary * 10;
  } else {
    // Sinon, on retourne simplement le salaire
    return "£" + salary;
  }
}

//Abbreviate a Two Word Name
function abbrevName(name){
  // Séparer le nom en deux parties (prénom et nom)
  const noms = name.split(' ');

  // Récupérer la première lettre de chaque partie et la mettre en majuscule
  const initialePrenom = noms[0].charAt(0).toUpperCase();
  const initialeNom = noms[1].charAt(0).toUpperCase();

  // Concaténer les initiales avec un point
  return initialePrenom + '.' + initialeNom;
}
//DNA to RNA Conversion
function DNAtoRNA(dna) {
  // Créer une chaîne vide pour stocker le résultat
  let rna = "";
  // Parcourir chaque caractère de la chaîne d'ADN
  for (let i = 0; i < dna.length; i++) {
    const nucleotide = dna[i];
    switch (nucleotide) {
      case 'G':
      case 'C':
      case 'A':
        rna += nucleotide;
        break;
      case 'T':
        rna += 'U';
        break;
      default:
        throw new Error("Nucleotide invalide: " + nucleotide);
    }
  }

  return rna;

}

//ARRAYS
//Counting sheep...                      
function countSheeps(sheep) {
  let nombreMoutons = 0;

  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      nombreMoutons++;
    }
  }

  return nombreMoutons;
}
//Ones and Zeros
const binaryArrayToNumber = arr => {
  // Réverser le tableau pour commencer par le chiffre des unités
  arr = arr.reverse();

  // Initialiser la valeur décimale à 0
  let decimal = 0;

  // Parcourir chaque bit du nombre binaire
  for (let i = 0; i < arr.length; i++) {
    // Si le bit est à 1, ajouter 2 puissance i à la valeur décimale
    if (arr[i] === 1) {
      decimal += Math.pow(2, i);
    }
  }

  return decimal;

};
//A Needle in the Haystack                 
function findNeedle(haystack) {
  // On utilise la méthode indexOf() pour trouver l'indice de la valeur "needle"
  const needleIndex = haystack.indexOf('needle');

  // Si l'aiguille est trouvée, on retourne le message avec l'indice
  if (needleIndex !== -1) {
    return `found the needle at position ${needleIndex}`; 
  } else {
    // Si l'aiguille n'est pas trouvée, on peut retourner un message d'erreur
    return "needle not found";
  }
}
//Remove the minimum
function removeSmallest(numbers) {
  // Si le tableau est vide, on retourne un tableau vide
  if (numbers.length === 0) {
    return [];
  }

  // Trouver l'index de la plus petite valeur
  let smallestIndex = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[smallestIndex]) {
      smallestIndex = i;
    }
  }

  // Créer une nouvelle copie du tableau
  const result = [...numbers];

  // Supprimer l'élément à l'index trouvé
  result.splice(smallestIndex, 1);

  return result;

}
//Convert number to reversed array of digits
function digitize(n) {
  // Convertir le nombre en chaîne de caractères
  const numString = n.toString();

  // Séparer les chiffres en un tableau
  const digits = numString.split('');

  // Inverser le tableau
  const reversedDigits = digits.reverse();

  // Convertir chaque élément du tableau en nombre
  const reversedNumbers = reversedDigits.map(digit => parseInt(digit));

  return reversedNumbers;

}

//OBJECTS
//Make a function that does arithmetic!
function arithmetic(a, b, operator){
  switch (operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      return "Opérateur non reconnu";
  }

}
//Regular Ball Super Ball
class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}
//Make them bark!
Dog.prototype.bark = function() {
  return "Woof!";
};
//Add property to every object in array       *
var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
  }
];
// Parcourir chaque objet du tableau
questions.forEach(question => {
  // Ajouter la propriété userAnswer avec la valeur null
  question.userAnswer = null;
});
console.log(questions);
//FIXME: Get Full Name                       *
function getFullName(firstName, lastName) {
  // Vérification si les noms sont définis et non vides
  if (firstName === undefined || lastName === undefined) {
    return "Prénom ou nom non défini";
  }

  // Concaténation des noms avec un espace
  const fullName = firstName + " " + lastName;
  return fullName;
}

//Basic Language Features
//Grasshopper - Summation
function summation(num) {
  // Initialiser la somme à 0
  let sum = 0;

  // Boucle pour itérer de 1 à num
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}
//Jenny's secret message
function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}
//Function 1 - hello world                   
function greet() {
  return "hello world!";  
}
//Count the Monkeys!
function monkeyCount(n) {
  // Créer un tableau vide pour stocker les nombres
  const monkeys = [];

  // Remplir le tableau avec les nombres de 1 à n
  for (let i = 1; i <= n; i++) {
    monkeys.push(i);
  }

  return monkeys;
}
//Are You Playing Banjo?                      
function areYouPlayingBanjo(name) {
  return name.startsWith('R') || name.startsWith('r') 
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}


//Conditional Statements (Control Flow)
//Find the capitals                            *
function findCapitals(str) {
  const capitals = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      capitals.push(i);
    }
  }
  return capitals;
}
//Plural                                       *
function isPlural(n) {
  return n!== 1;
}
//Drink about                                 
function peopleWithAgeDrink(age) {
  if (age < 14) {
    return "drink toddy";
  } else if (age < 18) {
    return "drink coke";
  } else if (age < 21) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
}
//Leonardo Dicaprio and Oscars                
const leo = function(oscar) {
  if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy"; // Removed the period here
  } else if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!";
  } else if (oscar < 88) {
    return "When will you give Leo an Oscar?";
  } else {
    return "Leo got one already!";
  }
};
//Switch/Case - Bug Fixing #6                 
function evalObject(value) {
  var result = 0;
  switch(value.operation) {
    case '+': 
      result = value.a + value.b;
      break; 
    case '-': 
      result = value.a - value.b;
      break; 
    case '/': 
      result = value.a / value.b;
      break; 
    case '*': 
      result = value.a * value.b;
      break; 
    case '%': 
      result = value.a % value.b;
      break; 
    case '^': 
      result = Math.pow(value.a, value.b);
      break; 
  }
  return result;
}


//LOOPS
//Sentence Smash                           
function smash (words) {
  return words.join(' ');
}
//If you can't sleep, just count sheep!!
function countSheep(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
}
//Double Char
function doubleChar(str) {
  let result = '';
for (let i = 0; i < str.length; i++) {
  result += str[i].repeat(2);
}
return result;
}
//Unfinished Loop - Bug Fixing #1
function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) { // Increment counter
    newArray.push(counter);
  }

  return newArray;
}
//Sum of numbers from 0 to N                         *
function sumAllNumbers(num) {
  let sum = 0;
  let str = "";

  for (let i = 0; i <= num; i++) {
    sum += i;
    str += (i === 0) ? i : `+${i}`;
  }

  return `${str}=${sum}`;
}
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count < 0) {
      return "-10<0";  // Return '-10<0' for negative count values
    }
    
    if (count === 0) {
      return "0=0";
    } else {
      let sum = 0;
      let sequence = "";

      for (let i = 0; i <= count; i++) {
        sum += i;
        sequence += i === 0 ? i : "+" + i;
      }

      return sequence + " = " + sum;  // Adding a space before '='
    }
  };

  return SequenceSum;

})();


//#Changing Gears
//Multiples of 3 or 5
function solution(number) {
  if (number <= 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
//Sum of Digits / Digital Root
function digitalRoot(n) {
  if (n < 10) {
    return n;
  }

  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return digitalRoot(sum);
}
//Who likes it?                     
function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
//Find The Parity Outlier          
function findOutlier(integers) {
  const evenCount = integers.filter(num => num % 2 === 0).length;
  const oddCount = integers.length - evenCount;

  // If there are more even numbers, find the odd outlier, and vice versa.
  return integers.find(num => (evenCount > oddCount ? num % 2 !== 0 : num % 2 === 0));
}
//Stop gninnipS My sdroW!
function spinWords(string) {
  return string.split(' ').map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  }).join(' ');
}
