const Deahyeon = {
  name: "김대현",
  age: 28,
};

Deahyeon["gender"] = "Men";

console.log(Deahyeon.gender);

Deahyeon.girlfriend = function () {
  console.log(`${this.name}의 여자친구는 송수빈입니다`);
};

Deahyeon.girlfriend();
