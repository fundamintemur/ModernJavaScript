//es6
class PersonES6{
    constructor(firsName,lastName){
        this.firsName=firsName;
        this.lastName=lastName;
    }
    sayHi(){
        return `Sayının karesi: ${this.firsName} ${this.lastName}`;

    }
   
}
class CustomerES6 extends PersonES6{
        constructor(firsName,lastName,phone,userName){
            super(firsName,lastName);
            this.phone=phone;
            this.userName=userName;
        }
        static getTotal(){
            return 1000;
        }
}
let customer1=new CustomerES6("volkan","yükselen","123456","volkanyükselen");

console.log(customer1.sayHi());
console.log(CustomerES6.getTotal());