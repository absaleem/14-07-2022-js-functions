console.log("a) print all odd numbers");
var num = function (a) { var arr=[];  for(i=0;i<a;i++){  if(i%2!=0){ arr.push(i); }  } return arr; }
console.log(num(20));

console.log("b) convert all the strings to title caps in a string array");
toUppercase = function(str){  return str.toUpperCase(); };
let  string_array = ["saab", "volvo", "bmw"];  string_array = string_array.map(toUppercase);
console.log(string_array);

console.log("c) sum of all numbers in an array");
var add = function (a) { var arr=0;  for(i=0;i<a.length;i++){  var arr=arr+a[i]; } return arr; }
console.log(add([20,30,40,50]));

console.log("c) return of all prime numbers in an array");

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
numArray = numArray.filter((number) => {
 var sqrtNumber=Math.sqrt(number);
  for (var i = 2; i <= sqrtNumber; i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);

console.log("d) return all tha palindrome in an array")

function reverse(s){
    return s.split("").reverse().join("");
}
var checkIsPalindrome = function (arr) {
  var result=[];
  for(var i=0;i<arr.length;i++){
      if(arr[i]==reverse(arr[i])){
       result.push(arr[i]);
      }
  }
  return result;
}

console.log(checkIsPalindrome(["did","12321","hi"]));

console.log("g)remove duplicates from an array");
var array = [1, 2, 3, 2, 3];

var getUnique = function (arr) {
  let uniqueArr = [];    
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    return (uniqueArr);
}

console.log(getUnique(array));

//console.log("Rotate an array by k times")