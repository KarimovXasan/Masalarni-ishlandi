//1.sort to'g'irlab berdi
// let arr = [1, 3, 2, 6, 4, 5, 9, 7, 8];
 
// console.log(arr.sort());

//2.splice kesib berdi
// let spl = [1, 3, 2, 6, 4, 5, 9, 7, 8];

// console.log(arr.splice(0 , 4));

//filter filter qilib beradi 
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

//some true yoki folse
// const ages = [3, 10, 18, 20];

// ages.some(checkAdult);
// function checkAdult(age) {
//   return age > 18;
// }

//every
// const ages = [32, 33, 16, 40]; 

// function checkAge(age) {
//     return age > 18;
// }
// console.log(ages.every(checkAge));

//find
const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

console.log(ages.find(checkAge));