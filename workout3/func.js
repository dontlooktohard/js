function countryInfo(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
  }
  
  let info1 = countryInfo('Spain', 47, 'Madrid');
  let info2 = countryInfo('United States', 330, 'Washington D.C.');
  let info3 = countryInfo('Japan', 126, 'Tokyo');
  
  console.log(info1);
  console.log(info2);
  console.log(info3);