function getLetterGrade(score) {
    if (score >= 90 && score <= 100) {
      return "A";
    } else if (score >= 80 && score <= 89) {
      return "B";
    } else if (score >= 70 && score <= 79) {
      return "C";
    } else if (score >= 65 && score <= 69) {
      return "D";
    } else if (score >= 0 && score <= 64) {
      return "F";
    } else {
      return "Invalid score";
    }
  }
  console.log(getLetterGrade(95));  
  console.log(getLetterGrade(85));  
  console.log(getLetterGrade(75));  
  console.log(getLetterGrade(68));  
  console.log(getLetterGrade(50));  
  console.log(getLetterGrade(310)); 