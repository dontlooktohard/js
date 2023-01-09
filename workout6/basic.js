const getCurrentDate = () => {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const dayIndex = now.getDay();
    const dayName = days[dayIndex];
    const dayNumber = now.getDate();
    const monthIndex = now.getMonth();
    const month = months[monthIndex];
    const year = now.getFullYear();
    // Template literals:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    console.log(`Today is ${dayName} the ${dayNumber} of ${month}, ${year} `);
  };
  
  getCurrentDate(); 
//   code along with Ori