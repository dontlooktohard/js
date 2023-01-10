function getAverage(scores) {
    const avg = (scores[0] + scores[1] + scores[2]) / 3;
    return avg;
  }
  
  const johnsAvg = getAverage([89, 120, 103]);
  const mikesAvg = getAverage([116, 94, 123]);
  
  if (johnsAvg < mikesAvg) {
    console.log(`Mike's team wins with an average score of ${mikesAvg}`);
  } else if (johnsAvg > mikesAvg) {
    console.log(`John's team wins with an average score of ${johnsAvg}`);
  } else {
    console.log(`It's a draw, both teams have an average score of ${mikesAvg}`);
  }