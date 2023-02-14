const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(array2d) {
    this.field = array2d;
    this.status = "good";
    this.positionX = 0;
    this.positionY = 0;
    this.tempX = 0;
    this.tempY = 0;
    this.input = "";
  }

  print() {
    this.field[this.positionY][this.positionX] = pathCharacter;
    for (let i = 0; i < this.field.length; i++) {
      console.log(this.field[i].join(" "));
    }
    console.log(`Field size X:${this.field[0].length}, Y:${this.field.length}`);
    console.log(`Your position X:${this.positionX}, Y:${this.positionY}`);
  }

  getInput() {
    this.input = prompt("Which way you want to go?: ").toLocaleLowerCase();
    switch (this.input) {
      case "u":
        this.tempY--;
        break;
      case "d":
        this.tempY++;
        break;
      case "l":
        this.tempX--;
        break;
      case "r":
        this.tempX++;
        break;
      default:
        console.log(
          "Enter a valid direction. (Up: U, Right: R, Down: D or Left: L"
        );
    }
  }

  move() {
    if (
      this.tempY >= 0 &&
      this.tempY < this.field.length &&
      this.tempX >= 0 &&
      this.tempX < this.field[0].length
    ) {
      this.field[this.positionY][this.positionX] = fieldCharacter;
      this.positionX = this.tempX;
      this.positionY = this.tempY;
    } else {
      this.status = "lose";
      console.log("You fell from the field");
    }
  }

  evaluate() {
    let value = this.field[this.positionY][this.positionX];
    if (value === hole) {
      this.status = "lose";
      console.log("Game Over");
    } else if (value === hat) {
      this.status = "win";
      console.log("You Win!");
    }
  }

  game() {
    while (this.status === "good") {
      this.print();
      this.getInput();
      this.move();
      this.evaluate();
    }
  }

  static generateField(height, width, probability) {
    let f = [];
    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        let isHole = Math.random() < probability;
        row.push(isHole ? hole : fieldCharacter);
      }
      f.push(row);
    }

    let hatY = Math.floor(Math.random() * f.length - 1) + 1;
    let hatX = Math.floor(Math.random() * f[0].length - 1) + 1;
    f[hatY][hatX] = hat;

    return f;
  }
}

const myField = new Field([
  ["░", "░", "░", "░", "░"],
  ["░", "O", "░", "O", "░"],
  ["░", "O", "░", "░", "░"],
  ["░", "░", "^", "O", "░"],
  ["░", "O", "░", "░", "░"],
  ["░", "░", "░", "O", "░"],
]);

const a = Field.generateField(5, 5, 0.2);
const b = new Field(a);

b.game();
