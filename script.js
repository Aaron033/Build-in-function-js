const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



//for(let i = 0; i < companies.length; i++){
//    console.log(companies[i].end); //This code will output the end value (1)
//    console.log("-------");
//}

//companies.forEach(function(company){
//    console.log(company.name);
//    //This code has the same functionality as the code (1); 
//})

//let canDrink = []; 
//for(let i = 0; i < ages.length; i++){ //(2)
//    if(ages[i] >= 21){
//        canDrink.push(ages[i]); // This is how you insert a new value into an array;
//    }
//}

////var store = canDrink.join(' '); this gives an empty space between values 
//document.getElementById("display").innerHTML = store;

//This is old vanilla javascript
//const canDrink = ages.filter(function(age){
//    if(age >= 21){
//        return true;
//    }
//})

//console.log(canDrink)

const canDrink = ages.filter(age => age >= 21)

//const retailCompanies = companies.filter(function(company){
//    if(company.category === "Retail"){
//        return true;
//    }
//})

//This is ES6 format 
const retailCompanies = companies.filter(company => company.category === "Retail");
//Get 80s companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

//Get companies that lasted 10 years or more 
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10))

//Create array of company names 
const companyNames = companies.map(e => e.name);

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);
//document.getElementById("demo").innerHTML = fruits; 

