const { setWorldConstructor } = require("cucumber");

class AddFeaure {
  constructor() {
    this.firstOperand = '';
    this.secondOperand = '';
    this.result = '';
  }

  init(number) {
    this.firstOperand = number;
  }
 
  addTo(operand) {
    this.secondOperand = operand;
    this.result = this.firstOperand + this.secondOperand;
  }

}

setWorldConstructor(AddFeaure);