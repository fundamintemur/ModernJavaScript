//Maps:key/value pairs (colection)

let val;

const numbers=new Map();

numbers.set(1,"one");
numbers.set("2","two");
numbers.set(3,"three");
numbers.set("four","four");

val=numbers;
val=numbers.get(1);
val=numbers.get("2");
val=numbers.get("four")
val=numbers.size;
val=numbers.has(1);
val=numbers.delete("four")
val=numbers.has("four")
//numbers.clear();//tüm değerleri sizleriz

console.log(val);

for(var[key,value] of numbers){
    console.log(key + " = " +value);
}

numbers.forEach(function(key,value){
    console.log(key+"-"+value);
})