// Create the CoffeeMake() function

function CoffeeMake(сlassOfCoffy, typOfCoffee) {
  this.сlassOfCoffy = сlassOfCoffy;
  this.typOfCoffee = typOfCoffee;
}
// Add the on() prototype to the CoffeeMake() class
// The machine says hello and asks for the type of coffee

CoffeeMake.prototype.on = function () {
  console.log("Привіт! Яку каву бажаєш?");
  setTimeout(function () {
    console.log("...замовлення прийняте, очікуйте будь ласка");
  }, 2000);
};

// Add the off() method, which wants something delicious and asks to pick up the coffee

CoffeeMake.prototype.off = function () {
  console.log("Cмачного!");
};

// ***********************************************************

console.log(
  `************************ Drip Coffee Machine ************************`
);

// Create a drip coffee machine and add the basic CoffeeMake skills to it
function DripCoffeeMachine(сlassOfCoffy, typOfCoffee, typeOfSugar) {
  CoffeeMake.call(this, сlassOfCoffy, typOfCoffee);
  this.typeOfSugar = typeOfSugar;
}

// We copy the prototypes from the parent function to the child function
DripCoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
// We make a reference to the constructor
DripCoffeeMachine.prototype.constructor = DripCoffeeMachine;

// Prototype for a drip coffee machine
DripCoffeeMachine.prototype.makingCoffee = function () {
  console.log(
    `Ваше ${this.сlassOfCoffy} на ${this.typOfCoffee}, з ${this.typeOfSugar} цукром, готове`
  );
};

// The customer chooses coffee parameters
let yourCoffee = new DripCoffeeMachine("лате", "арабіці", "тростинним");

// We launch prototypes
yourCoffee.on();
setTimeout(function () {
  yourCoffee.makingCoffee();
}, 4000);
setTimeout(function () {
  yourCoffee.off();
}, 6000);

// ***********************************************************
setTimeout(function () {
  console.log(
    `*********************** Cornish Coffee Machine **********************`
  );
}, 9000);

// Create a drip coffee machine and add the basic CoffeeMake skills to it
function CornishCoffeeMachine(сlassOfCoffy, typOfCoffee, temperature) {
  CoffeeMake.call(this, сlassOfCoffy, typOfCoffee);
  this.temperature = temperature;
}

// We copy the prototypes from the parent function to the child function
CornishCoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
// We make a reference to the constructor
CornishCoffeeMachine.prototype.constructor = CornishCoffeeMachine;

// Prototype for a drip coffee machine
CornishCoffeeMachine.prototype.makingCoffee2 = function () {
  console.log(
    `Ваше ${this.сlassOfCoffy} на ${this.typOfCoffee}, приготовне на температурі води ${this.temperature} С°, готове`
  );
};

// The customer chooses coffee parameters
let yourCoffeeCornish = new CornishCoffeeMachine("капучіно", "рабусті", "90");

// We launch prototypes

setTimeout(function () {
  yourCoffeeCornish.on();
}, 9000);

setTimeout(function () {
  yourCoffeeCornish.makingCoffee2();
}, 13000);
setTimeout(function () {
  yourCoffeeCornish.off();
}, 14000);

// ***********************************************************
setTimeout(function () {
  console.log(
    `*********************** Original Coffee Machine **********************`
  );
}, 16000);

// Create a drip coffee machine and add the basic CoffeeMake skills to it
function OriginalCoffeeMachine(
  сlassOfCoffy,
  typOfCoffee,
  temperature,
  filter1
) {
  CoffeeMake.call(this, сlassOfCoffy, typOfCoffee);
  this.temperature = temperature;
  this.filter1 = filter1;
}

// We copy the prototypes from the parent function to the child function
OriginalCoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
// We make a reference to the constructor
OriginalCoffeeMachine.prototype.constructor = OriginalCoffeeMachine;

// Prototype for a drip coffee machine
OriginalCoffeeMachine.prototype.makingCoffee3 = function () {
  console.log(
    `Ваше ${this.сlassOfCoffy} на ${this.typOfCoffee}, приготовне на температурі води ${this.temperature} С° та ${this.filter1} фільтрі, готове`
  );
};

// The customer chooses coffee parameters
let originalCoffeeCornish = new OriginalCoffeeMachine(
  "ристретто",
  "ексцельзі",
  "110",
  "паперовому"
);

// We launch prototypes
setTimeout(function(){
    originalCoffeeCornish.on();
}, 17000)
setTimeout(function(){
    originalCoffeeCornish.makingCoffee3();
}, 21000)
setTimeout(function(){
    originalCoffeeCornish.off();
}, 22000)

