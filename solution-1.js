// js 상속

class Pet {
  //Constructor != constructor

  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  // == JS에서 클래스 내에서 객체의 인스턴스를 생성할때 호출되는 메서드
  // == 클래스의 인스턴스 초기화하는데 사용

  run = function () {
    alert(`${this.name} is running`);
  };
}

const pet1 = new Pet("치즈", "yellow");
//pet1.run();

class Cat extends Pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }

  viewInfo = function () {
    alert(`이름: ${this.name}, 품종: ${this.breed}, 색깔: ${this.color} `);
  };
}

const cat = new Cat("보리", "코숏", "흰색");
cat.viewInfo();
