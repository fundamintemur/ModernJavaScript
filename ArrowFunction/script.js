//arrow function
//es5
let welcomeES5=function(){
    console.log("hello from ES5");
}

welcomeES5();
//ES6
let welcomeES6=()=>{
    console.log("hello from Es6")
};

welcomeES6();

//parametreli kullanım
let multiplyES5=function(x,y){
    return x*y;
}
console.log(multiplyES5(10,5));

//ES6
let multiplyES6=(x,y)=>{
   return x*y
};
console.log(multiplyES6(10,5))

//es5
let splitES5=function(text){
    return text.split(" ");
}
console.log(splitES5("Modern javascript Kursu"))

//es6
let splitES6=(text)=>{
    return text.split(" ")
}
console.log(splitES6("Modern Javascript Kursu"));

//object literals
//es5
let getProductES5=function(id,name){
    return{
        id:id,
        name:name
    }
}

console.log(getProductES5("1","Samsung"))

//es6
let getProductES6=(id,name)=>(
    {
        id:id,
        name:name
    }

)
console.log(getProductES6("2","Apple"))

const phones=[
    {name:'Iphone 8',price:3000},
    {name:'Iphone 6',price:2000},
    {name:'Iphone 5',price:1000},
    {name:'Iphone 4',price:2500},
]


let priceEs5=phones.map(function(phone){
 return phone.price;
});

console.log(priceEs5)

//es6

let priceEs6=phones.map(phone=>phone.price);
console.log(priceEs6)

//es5
const arr=[1,2,3,6,10,20,50,55,61,79];
let eventES5=arr.filter(function(a){
  return a%2==0;
})
console.log(eventES5)

//es6
let eventES6=arr.filter(a=>a%2==0);
console.log(eventES6)