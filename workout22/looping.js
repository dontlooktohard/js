
population=[50000000,20000000,10000000,5000000];

function populationPercentages(population){
percentages=[];
for (let i = 0; i < population.length; i++) {
    percentages.push(population[i].length);
  }
  function percentageOfWorld1(population) {
   
    return (population / 7900) * 100;
}


let chinaPop = 1441000000;
let indiaPop = 1339000000;
let usPop = 331002651;
console.log(percentageOfWorld1(chinaPop) + '%');  
console.log(percentageOfWorld1(indiaPop) + '%');  
console.log(percentageOfWorld1(usPop) + '%'); 
}
