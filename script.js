/*
* Multiple line comment
* */

//single line comment
/*(var firstName = 'John';
console.log("firstName");
var LastName = "John";
console.log("Doe");
var age = 22;
console.log(age);
var isMarried = true;
console.log("isMarried");
<script src=""></script>

/*
* Variable Mutation and type coersion -> push/paksa/otomatis dapat diubah
*/

//type coersion
// var firstName = 'John'; //string
// var age = 28; //number

// console.log(firstName+ ' '+age);

// var job, isMarried'


// var job = 'teacher';
// var isMarried = 'false';

// console.log(firstName+ ' '+age+ 'year old' +'is he married?' + isMarried);

// //Variable Mutation
// age = 'twenty eight';
// job = 'driver';

// console.log(firstName+ 'is a' + age + 'years old' + 'is he married?' + isMarried);
// /*alert(firstName+ 'is a' + age + 'years old' + 'is he married?' + isMarried);*/

// var lastName = prompt('What is his last name');
// console.log(firstName + '' + lastName);

// /*
// * Basic Operation
// */

// var year, ageJohn, ageMark, yearJohn, yearMark;

// year = 2019;
// ageJohn = 28;
// ageMark = 33;

// //Math Operator
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn, yearMark);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// //Logical Operator
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// //typeof operator
// console.log(typeof johnOlder);
// console.log(typeof now);
// console.log(typeof 'John and Mark');
// var x;
// console.log(typeof x);

// /*
// * Operator Precedemce
// */

// var now = 2019;
// var yearJohn = 1989;
// var fullAge = 17;

// //Multiple Operators

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// //Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;

// var average = ageJohn + ageMark / 2;
// console.log(Average);

// var x, y;
// y = (3 + 5) * 4 - 6; // 8 * 4 - 6 //32 - 6 //
// console.log(y);

// //More Operator
// x = x * 2;
// x *= 2;
// x = x + 2;
// x += 2;
// x = x + 1;
// x += 1;
// x++;

/*
Tugas 1 

Mark and John are trying to compare their
BMI (Body Mass Index), which is calculated
using the formula

BMI = mass / (height*height)
(mass in kg and heigh in meter).

1. Store Mark's and John's mass and height in variables
2. Calculated a boolean variable containing information about
whether Mark has a higher BMI than John
3. Print a string to the console containing the variable
from step 3. Something like ("Is Mark's BMI higher than John's? true")

*/


/*


var massMark, massJohn, heightMark, heightJohn;
massMark = 50;
console.log("Mark's mass = " + massMark);
massJohn = 60;
console.log("John's mass = " + massJohn);
heightMark = 165;
console.log("Mark's height = " + heightMark);
heightJohn = 170;
console.log("John's height = " + heightJohn);

var bmiMark = massMark / (heightMark + heightMark);
console.log("Mark's BMI = " + bmiMark);
var bmiJohn = massJohn / (heightJohn + heightJohn);
console.log("John's BMI = " + bmiJohn);

var isHigherBMI = bmiMark > bmiJohn;

console.log("Is Mark BMI higher than John's ? " + isHigherBMI);

if johnbmi > markbmi
johnbmi > dari markbmi dan sebaliknya

tugass

*/

/*
====================================================
tuesday, august 20th 2019
if / else statement */

// var firstName = 'John ';
// var status = 'single';

// if (status === 'married') {
// 	console.log(firstName + 'is married');
// } else{
// 	console.log(firstName + 'will hopefully marry soon');
// }

// var isMarried = true;

// if (isMarried === true) {
// 	console.log(firstName + 'is married');
// }else{
// 	console.log(firstName + 'will hopefully marry soon');
// }

/*
====================================================
tuesday, august 20th 2019
Boolean Logic = menggunakan operator logica and, or, not. */

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
// 	console.log(firstName + ' is a boy');
// } else if (age > 13 && age < 20){ //age >=13 AND age < 20
// 	console.log(firstName + 'is a teenager');

// } else if (age > 20 && age < 30) {
// 	console.log(firstName + ' is a young man')
// } else {
// 	console.log(firstName + ' is a man');
// }

/*
====================================================
tuesday, august 20th 2019
The ternary operator and switch statement */

// var firstName = 'Bryan';
// var age = 1;

// //Ternary Operator
// age >= 10 ? console.log(firstName + ' Drinks Juice ')
// : console.log(firstName + ' Drinks Milk');

// // // if (age >=10){
// // // 	console.log(firstName + ' Drink Juice');
// // // }else{
// // // 	console.log(firstName + ' Drink Milk');
// // // }

// var drink = age >= 10 ? 'Juice' : 'Milk';
// console.log(drink);

// /*
// ====================================================
// tuesday, august 20th 2019
// Switch statemnent */

// var job = 'pilot';

// switch(job){
// 	case 'teacher':
// 		console.log(firstName + ' Is a teacher and Instructor');
// 		break;
// 	case 'driver':
// 		console.log(firstName + ' Is a driver');
// 		break;
// 	case 'designer':
// 		console.log(firstName + ' Is a designer');
// 		break;
// 	case 'pilot':
// 		console.log(firstName + ' Is a Pilot');
// 		break;	
// 	default:
// 		console.log(firstName + ' Does something else');
// }


// var age = 13;
// switch(true){
// 	case age < 13:
// 	console.log(firstName + 'is a boy');
// 	break;
// 	case age >= 13 && age < 20:
// 	console.log(firstName + ' is a teenager');
// 	case age >=20 && age < 30:
// 	console.log(firstName + 'is a young man');
// 	break;
// 	default:
// 	console.log(firstName + 'is a man');
// }

// /*
// ====================================================
// thursday, august 29th 2019
// falsy values : undefined, null, 0, '',Nan
// truthty values : NOT falsy values */


// var height = '';

// if(height || height === 0 || height === ''){ //menggunakan 3 sama dengan adalah strict sedangkan 2 tidak.
// 	console.log('Variable is defined');
// }else{
// 	console.log('Variable is not defined');
// }

// ===========================================
// thursday, august 29th 2019
// function

// function calculateAge(birthYear){
// 	return 2019 - birthYear;
// }

// var ageJohn = calculateAge(1957);
// console.log(ageJohn)
// var ageMark = calculateAge(1969);
// console.log(ageMark);
// var ageMike = calculateAge(1988);
// console.log(ageMike);
// var ageJohn2 = calculateAge(1992);
// console.log(ageJohn2)
// var ageMark2 = calculateAge(1997);
// console.log(ageMark2);
// var ageMike2 = calculateAge(2002);
// console.log(ageMike2);


// function yearUntilRetirement (year,firstName){
// 	var age = calculateAge(year);
// 	var retirement = 60 - age;
// 	if (retirement > 0) {
// 		console.log(firstName + 'retires in ' + retirement + ' years');
// 	}else{
// 		console.log(firstName + 'is already retired.');
// 	}
// }
// yearUntilRetirement(1987,'John ');
// yearUntilRetirement(1946,'Mark ');
// yearUntilRetirement(1971,'Jane ');


// ===========================================
// tuesday, august 3rd 2019
// function statements and expressions (cara lain menulis function)

//function declaration
// function whatDoYouDo (job, firstName){

// }

// function expression
// var whatDoYouDo = function(job, firstName){
// 	switch(job){
// 		case 'teacher':
// 			return firstName + ' is a teacher';
// 		case 'driver':
// 			return firstName + ' is a driver';
// 		case 'designer':
// 			return firstName + ' is a designer';
// 		default	:
// 			return firstName + ' does something';

// 	}
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Mark'));
// console.log(whatDoYouDo('retired', 'Mike'));

// //ujian semuanya cu..

// //array
// //initialize array

// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[0]);
// console.log(names.length);
// // console.log(years[1]);
// // console.log(years.length);


// //mutate array
// names[0] = 'Ben';
// // names[4] = 'Mary';
// names[names.length] = 'Mary';
// console.log(names);

// //different data types
// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue'); //diletakan dipaling belakang
// john.unshift('Mr'); //diletakan dipaling depan
// console.log(john);

// john.pop() //pop blue
// console.log(john); 
// john.pop()
// console.log(john);
// john.shift()
// console.log(john);


//Exercise #2

/*
John and his family went on a holiday and 
went to 3 different restaurants.
The bills were $124, $48 and $268

To tip the waiter a fair amount, 
John created a simple tip calculator (as a function)
He likes to top 20% of bill when 
the bill is less than $50, 
15% when the bill is between $50 and $200, and
10% if the bill is more than $200.

In the end would like to have 2 array:
1). Containing all 3 tips (one for each bill)
2). Containing all 3 final paid amounts (bill + tip)

(Notes: to calculate 20% of a value, simply
multiple it with 20/100 = 0.2)

.buat function tipcalculator 
.tip calculator ada kondisi if else sesuai dengan soal
.array simpan bill
.array simpan tip

.setiap bill panggil fungsi
.array yang 3 final amounts bill + tip

Good Luck

*/

// ===========================================
// thursday, september 5th 2019
// Object and properties



// cara pertama objek literal
// var john = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	family: ['Jane', 'Mark', 'Bob', 'Emily'],
// 	job: 'driver',
// 	isMarried: false
// }

// console.log(john.firstName);
// console.log(john.lastName);
// console.log(john.family[3]);
// console.log(john['birthYear']);

// console.log(john['family'][1]);
// var x = 'birthYear'; //cara lain akses array, deklarasi variable terlebih dahulu
// console.log(john[x]); //tampilkan variable x.



//cara ke dua
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = '1969';
// jane['lastName'] = 'Smith';
// console.log(jane);

// console.log('')


// var john = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	family: ['Jane', 'Mark', 'Bob', 'Emily'],
// 	job: '',
// 	isMarried: false,
// 	calcAge: function(birthYear){ //function expression
// 		this.age = 2019 - this.birthYear; //this merupakan kata kunci menunjukan properties didalam suatu objek tersebut
// 		return this.age;	
// 	}
// }

// var age = john.calcAge();
// john.calcAge();
// console.log(john);

/*
Exercise #2

Let's remember the first exercise where Mark and John compared
compared their BMI's. Let's now implement the same
functionality with object and methods.

1. for each them, create an object with properties for their 
full name, mass, and height.
2. Then, add a method to each object to calculate
the BMI. Save the BMI to the object and also return it 
from the method.
3. In the end, log to the console who has the highest BMI
together with the full name and the respective BMI.
Don't forget the might have the same BMI.

Remember: BMI = mass / height ^ 2

Good Luck.
*/

// var john = {
// 	fullname: 'JohnSmith',
// 	mass: 65,
// 	height: 175,
// 	calcBMI: function(){
// 		this.BMI = this.mass / (this.height * this.height);
// 		return this.BMI;
// 	}
// }



// var mark = {
// 	fullname: 'MarkSmith',
// 	mass: 60,
// 	height: 170,
// 	calcBMI: function(){
// 		this.BMI = this.mass / (this.height * this.height);
// 		return this.BMI;
// 	}
// }

// console.log(john.calcBMI());
// console.log(john);

// console.log(mark.calcBMI());
// console.log(mark);


// if (john.calcBMI() > mark.calcBMI()) {
// 	console.log('John has the highest BMI : ' + john.calcBMI());
// }else if (mark.calcBMI() > john.calcBMI()){
// 	console.log('Mark has the highest BMI : ' + mark.calcBMI());
// }else{
// 	console.log('they have the same BMI');
// }


/*
Loop and iteration - sept 10th 2019
*/

//for loop
// for (var i = 0; i<10; i+=2){ //i+=1
// 	console.log(i);
// }


// var john = ['John', 'Smith', 1990, 'designer', false, 'blue']; 

// for (var i = 0; i < john.length; i++) {
// 	console.log(john[i]);
// }

// // while loop 
// var i =0;
// while (i<john.length){
// console.log(john[i]);
// i++;
// }


// var nama = 'John'
// console.log(nama[1]+nama[2]+nama[3]+'s');


//continue and break statement
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue']; 

// for (var i = 0; i < john.length; i++) {
// 	if (typeof john[i] !== 'string'){
// 		continue;
// 	}
// 	console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
// 	if (typeof john[i] !== 'string'){
// 		break;
// 	}
// 	console.log(john[i]);
// }

// for (var i=john.length-1; i>=0; i--){
// 	console.log(john[i]);
// }


//Logic challenge - Palindrome

// diberikan sebuah function palindrome (kata) uang menerima
// satu parameter. function tersebut akan mengembalikan nilai
// true jika kata merupakan palindrome, dan false jika bukan.
// Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
// Contoh, 'katak' dibalik tetaplah 'katak'.



// function palindrome (kata){

// for (var i = 0; i < kata.length; i++) {
// 	if (kata[i] === kata[kata.length-(1-i)]){
// 	console.log(kata + ' is true');
// }else{
// 	console.log(kata + ' is false');
// 		}

// 	}
// }

// function palindrome (kata2){
// 	var kata='';
// 	for (var i=kata2.length-1; i>=0; i-- ){
// 		kata = kata + kata2[i];
// 	}
// 	if (kata2 == kata){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }

// //TEST CASES
// console.log(palindrome('katak')); //true
// console.log(palindrome('blanket')); //false
// console.log(palindrome('civic')); //true
// console.log(palindrome('kasur rusak')); //true
// console.log(palindrome('mister')); //false


function cariMean(arr){
	
	var jumlah = 0;


	for (var i= 0; i< arr.length; i+= 1){
		jumlah += arr[i];
	}

	return Math.round(jumlah / arr.length)
}

//TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); //3
console.log(cariMean([3, 5, 7, 5, 3])); //5
console.log(cariMean([6, 5, 4, 7, 3])); //5
console.log(cariMean([1, 3, 3])); //2
console.log(cariMean([7, 7, 7, 7, 7])); //7ew
