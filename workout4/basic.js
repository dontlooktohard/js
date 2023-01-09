function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children`;
  }
  let fortune = tellFortune('programmer', 'New York', 'Rana', 2);
console.log(fortune);