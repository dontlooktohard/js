const wonderWoman = {
name: "Diana Prince"
}
const batman = {
name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];
    
function printName() {
  console.log(`my name is ${this.name}`);
}

// againe the apply method is conecting the func with the "this"
function printHeroes(heroes, printFunc) {
    heroes.forEach(function(hero) {
      printFunc.apply(hero);
    });
  }
  
  printHeroes(superHeroes, printName);