


// bind at the end so that the "this" keyword inside  hero.getStrength 
// function will be incontinent and the helth and power will get.

const hero = {
    health: 5,
    power: 68,
    getStrength: function(){
    if (this.health <= 5){
    return this.power - 10;
    } else return this.power;
    }
    }
    function whoIsStronger(getStrength){
    const myStrength = 82;
    if (getStrength() < myStrength){
    return "I am stronger";
    } else return "You are stronger";
    }
    whoIsStronger(hero.getStrength.bind(hero));
    console.log(whoIsStronger(hero.getStrength.bind(hero)));



//  using the apply way
    const hero2 = {
        health: 5,
        power: 68,
        getStrength: function(){
        if (this.health <= 5){
        return this.power - 10;
        } else return this.power;
        }
    };
    
    function whoIsStronger(getStrength){
        const myStrength = 82;
        if (getStrength.apply(hero2) < myStrength){
        return "I am stronger";
        } else return "You are stronger";
    }
    
    whoIsStronger(hero2.getStrength);