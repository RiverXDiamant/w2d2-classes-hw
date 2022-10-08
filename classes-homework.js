// =====W2D2- Classes Homework

// ===== Classes =====
//  You will be working with this class
// 1.class Cat {}
//    a. give the class at least 3 properties
//    b. give the class at least 3 methods
//    c. create two instances of the class (two cats)
//    d. log both instances to see their properties
//    e. invoke each method from both instances

class Cat {
  constructor(name, age, breed, color) {
    (this.name = name),
      (this.age = age),
      (this.breed = breed),
      (this.color = color);
  }
  isAsleep() {
    this.isAsleep = true;
    console.log(`${this.name} is sleeping.`);
  }
  isEating() {
    this.isEating = true;
    console.log(`${this.name} is eating.`);
  }
  isPlaying() {
    this.isPlaying = true;
    console.log(`${this.name} is playing!`);
  }
}

const padfoot = new Cat("Padfoot", "2 yrs.", "Bombay", "Black");
console.log(padfoot);
padfoot.isAsleep();
padfoot.isEating();
padfoot.isPlaying();

const mrMittens = new Cat("Mr Mittens", "8 months", "Scottish Fold", "Grey");
console.log(mrMittens);
mrMittens.isAsleep();
mrMittens.isEating();
mrMittens.isPlaying();

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
  constructor(name, limbs, weapon) {
    (this.name = name),
      (this.limbs = limbs), // Status of limbs: If Pirate has all limbs, input: 'All' or If Pirate has amputated limb(s), input example: 'missing right-hand'
      (this.weapon = weapon);
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
  "Missing left-hand",
  "Blunderbuss and Dagger"
);

const blackBeard = new Pirate("Black Beard", "All", "Cutlass", "Alive");

const blackCaesar = new Pirate("Black Caesar", "All", "Cutlass and Pistol");

// PIRATE SHIP - JOLLY ROGER //
const calicoJack = new Pirate(
  "Calico Jack",
  "Missing right-ear",
  "Blunderbuss"
);

const noFootnancy = new Pirate(
  "No-Foot Nancy",
  "Missing left-foot",
  "Cutlass and Pistol"
);

const paleBonesbart = new Pirate(
  "Pale-Bones Bart",
  "All",
  "Boarding Axe and Musket"
);

// const blackPearl = [ruthlessMary, blackBeard, blackCaesar];
// const jollyRoger = [calicoJack, noFootnancy, paleBonesbart];
// console.log(blackPearl);
// console.log(jollyRoger);

// ruthlessMary.isTraining();
// paleBonesbart.isDrinking();
// blackBeard.isSleeping();

const blackPearl = [ruthlessMary, blackBeard, blackCaesar];

blackPearl.forEach((instances) => {
  console.log(instances);
});

const jollyRoger = [calicoJack, noFootnancy, paleBonesbart];

jollyRoger.forEach((entry) => {
  console.log(entry);
});
