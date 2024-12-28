//rest parameters
//ES5
function sum(){
  let arr=Array.prototype.slice.call(arguments);
  let result=0;
  arr.forEach(function(item)
  {
   result+=item;
  });
  return result;
}
console.log(sum(10,20,30))

//ES6
function sumES6(...arr){
    let result=0;
    arr.forEach(item=>result+=item);
    return result;
}
console.log(sumES6(10,20,30));
//es6
function isDriver(age,...years){
    years.forEach(year=>console.log(2018-year>=18))
}

isDriver(17,1990,2002,1983,2005)
