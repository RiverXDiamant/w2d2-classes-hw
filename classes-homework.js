// =====W2D2- Classes Homework

// ===== Classes =====
//  You will be working with this class
// 1.class Cat {}
//    a. give the class at least 3 properties
//    b. give the class at least 3 methods
//    c. create two instances of the class (two cats)
//    d. log both instances to see their properties
//    e. invoke each method from both instances

// Classes are blueprints for objects

// const lion = {
//     legs: 4,
//     color: "golden",
//     diet: "carnivores"
// }

// const zebra = {
//     legs: 4,
//     color: "black and white",
//     diet: "herbivore"
// }

// class is a reserved JS keyword
// classes always start with a capital letter

// class Cat {

// }

// ===== Constructors ====
// here is a class to work with

// class Pirate {

//   constructor(){

//   }

// }
//   a. create 3 properties that are set by the constructor
//   b. create 3 methods
//   c. instantiate /2 arrays/ of /3 pirates/, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
//   d. loop over each array and print 3 properties of each pirate

class Pirate {
  constructor(name, age, limbs, weapon, ship, status) {
    (this.name = name),
      (this.age = age),
      (this.limbs = limbs), // Status of limbs: If Pirate has all limbs, input: 'All' or If Pirate has amputated limb(s), input example: 'missing right-hand'
      (this.weapon = weapon),
      (this.ship = ship),
      (this.status = status); // Is pirate alive or dead
  }
  isSleeping() {
    this.isSleeping = true;
    console.log(`${this.name} is below deck sleeping.`);
  }
  isDrinking() {
    this.isDrinking = true;
    console.log(`${this.name} is drinking rum.`);
  }
  isTraining() {
    this.isTraining = true;
    console.log(`${this.name} is training with their ${this.weapon}.`);
  }
}

// PIRATE SHIP - BLACK PEARL //

const ruthlessMary = new Pirate(
  "Mary the Ruthless",
  "38",
  "Missing left-hand",
  "Blunderbuss and Dagger",
  "Black Pearl",
  "Alive"
);

const blackBeard = new Pirate(
  "Black Beard",
  "37",
  "All",
  "Cutlass",
  "Black Pearl",
  "Alive"
);

const blackCaesar = new Pirate(
  "Black Caesar",
  "25",
  "All",
  "Cutlass and Pistol",
  "Black Pearl",
  "Alive"
);

// PIRATE SHIP - JOLLY ROGER //
const calicoJack = new Pirate(
  "Calico Jack",
  "50",
  "Missing right-ear",
  "Blunderbuss",
  "Jolly Roger",
  "Alive"
);

const noFootNancy = new Pirate(
  "No-Foot Nancy",
  "25",
  "Missing left-foot",
  "Cutlass and Pistol",
  "Jolly Roger",
  "Alive"
);

const paleBonesbart = new Pirate(
  "Pale-Bones Bart",
  "32",
  "All",
  "Boarding Axe and Musket",
  "Jolly Roger",
  "Alive"
);

// const blackPearl = [ruthlessMary, blackBeard, blackCaesar];
// const jollyRoger = [calicoJack, noFootNancy, paleBonesbart];
// console.log(blackPearl);
// console.log(jollyRoger);

// ruthlessMary.isTraining();
// paleBonesbart.isDrinking();
// blackBeard.isSleeping();

const blackPearl = [ruthlessMary, blackBeard, blackCaesar];
const jollyRoger = [calicoJack, noFootNancy, paleBonesbart];
