// function Kdt(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function () {
//     console.log(`${this.name}의 나이는 ${this.age}입니다.`);
//   };
// }

// let subin = new Kdt("subin", 26);
// let deahyeon = new Kdt("deahyeon", 28);
// subin.sayHello();
// deahyeon.sayHello();

// class Kdt {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`${this.name}의 나이는 ${this.age}이다.`);
//   }
// }

// let jane = new Kdt("jane", 20);
// jane.sayHello();

// class Cafe {
//   constructor(drink, desert) {
//     this.drink = drink;
//     this.desert = desert;
//   }
//   order() {
//     return this.drink + this.desert;
//   }
// }

// let user1 = new Cafe("coffee", "cake");
// let user2 = new Cafe("coffee", "");

// console.log(`${user1.order()}주세요`);
// console.log(`${user2.order()}주세요`);

// class ClothesColor {
//   constructor(top, bottom) {
//     this.top = top;
//     this.bottom = bottom;
//   }
//   color() {
//     console.log(`윗옷은 ${this.top}색, 아래옷은 ${this.top}색`);
//   }
// }

// let girl = new ClothesColor("red", "white");
// girl.color();

// class Brand {
//   constructor(name) {
//     this.name = name;
//   }
//   sayBrand() {
//     console.log(`${this.name}입니다.`);
//   }
// }
// let gucci = new Brand("gucci");
// let fendi = new Brand("fendi");

// class KidBrand extends Brand {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }

//   kidSize() {
//     super.sayBrand();
//     console.log(`${this.name}의 kids 사이즈는 ${this.size}까지 있습니다`);
//   }
//   sayBrand() {
//     // over-riding
//     console.log(`안녕하세요 kids로 돌아온${this.name}입니다.`);
//   }
// }
// let gucciKid = new KidBrand("gucci", "l");
// let polo = new KidBrand("polo", "xxs");

// // class는 호이스팅 안됨!!
// class KidBrand extends Brand {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
//   sayBrand() {
//     super.sayBrand();
//     console.log(`${this.name}의 kids 사이즈는 ${this.size}까지 있습니다.`);
//   }
// }

// let polo = new KidBrand("polo", "xxs");
// polo.sayBrand();

// // console.log(polo instanceof KidBrand);
// // console.log(polo instanceof Brand);
// console.log("name 키가 polo객체에 있어?", "name" in polo);

// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   sayCar() {
//     console.log(`${this.name}입니다.`);
//   }
// }

// let morning = new Car("morning");
// morning.sayCar();

// class ElecCar extends Car {
//   constructor(name, fuel) {
//     super(name);
//     this.fuel = fuel;
//   }
//   sayCar() {
//     super.sayCar();
//     console.log(`그리고 ${this.fuel}로 움직임`);
//   }
// }

// let auddi = new ElecCar("auddi", "elec");
// auddi.sayCar();
