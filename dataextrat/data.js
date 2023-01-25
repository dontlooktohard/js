/*
  This array of objects contains three main objects representing three different people, each of which includes properties such as `id`, `name`, `age`, `address`, `hobbies`, and `jobs`. The `address` property is an object with properties such as `street`, `city`, `state`, and `zip`, and the `hobbies` and `jobs` properties are arrays. The `jobs` property is an array of objects, each of which includes properties such as `company`, `position`, `startDate`, `endDate`, and `responsibilities`.
*/

const data = [
    {
      id: 1,
      name: "John Smith",
      age: 30,
      address:
      {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
      },
      hobbies: ["reading", "hiking", "traveling"],
      jobs: [
        {
          company: "Acme Inc.",
          position: "Developer",
          startDate: "2020-01-01",
          endDate: "2022-12-31",
          responsibilities: ["Developing web applications", "Debugging code", "Writing documentation"]
        },
        {
          company: "Beta Corp.",
          position: "Senior Developer",
          startDate: "2022-01-01",
          endDate: null,
          responsibilities: ["Leading a team of developers", "Mentoring junior developers", "Improving codebase"]
        }
      ]
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 25,
      address: {
        street: "456 Park Ave",
        city: "Los Angeles",
        state: "CA",
        zip: "90001"
      },
      hobbies: ["cooking", "gardening", "yoga"],
      jobs: [
        {
          company: "Gamma LLC.",
          position: "QA Engineer",
          startDate: "2019-01-01",
          endDate: "2021-12-31",
          responsibilities: ["Testing web applications", "Creating test cases", "Providing feedback"]
        },
        {
          company: "Delta Inc.",
          position: "Senior QA Engineer",
          startDate: "2022-01-01",
          endDate: null,
          responsibilities: ["Leading a team of QA engineers", "Developing automation tests", "Improving quality processes"]
        }
      ]
    },
    {
      id: 3,
      name: "Bob Johnson",
      age: 35,
      address: {
        street: "789 Elm St",
        city: "Chicago",
        state: "IL",
        zip: "60001"
      },
      hobbies: ["fishing", "camping", "surfing"],
      jobs: [
        {
          company: "Epsilon Inc.",
          position: "Data Analyst",
          startDate: "2018-01-01",
          endDate: "2020-12-31",
          responsibilities: ["Analyzing data", "Creating reports", "Providing insights"]
        },
        {
          company: "Zeta Corp.",
          position: "Senior Data Analyst",
          startDate: "2021-01-01",
          endDate: null,
          responsibilities: ["Leading a team of data analysts", "Developing machine learning models", "Improving data processes"]
        }
      ]
    }
  ];
  
  // Question 1: Extract to an array a list of all the people's names from the data.
  
  const getName = data.map(key => key.name);
  console.log(getName);
  
  // Question 2: Extract to an array all the job positions for all the people.
  const getPosition = data.map(person => person.jobs.map(job => job.position));
  console.log(getPosition);
  
  // Question 3: Find the average age of the people.
  function getAvgAge(data) {
    return data.reduce((acc, current) => acc + current.age, 0) / data.length;
  }
  console.log(getAvgAge(data));

  // Question 4: Return an array with the unique cities where the people live.
  const  getCities = data.map(n => n.address.city);
  console.log(getCities);
  
  // Question 5: Extract to an array a list of all the people's hobbies in alphabetical order.


  function getSortedHobbies(data) {
    let hobbies = data.flatMap(data => data.hobbies)
    return hobbies.sort();
  }
  console.log(getSortedHobbies(data));

  // Question 6: Get the total number of years of experience for all the people in the data.
function getTotalYears(data) {

    let startDate = data.flatMap(data => data.jobs.map(jobs => jobs.startDate));
    for (const start of startDate) {
         start = new Date(start);
    }
    console.log(start);
    console.log(startDate);
    let endDate = data.flatMap(data => data.jobs.map(jobs => jobs.endDate));
    console.log(endDate);
    let total = startDate[0] - endDate[0]
    console.log(total);
  }
  console.log(getTotalYears(data));
  
  let totalYears = data.reduce((total, person) => {
    return total + person.jobs.reduce((years, job) => {
      let end = job.endDate ? new Date(job.endDate) : new Date();
      let start = new Date(job.startDate);
      let diff = end.getFullYear() - start.getFullYear();
      return years + diff;
    }, 0);
  }, 0);
  console.log(totalYears);
  
  // Question 7: Extract to an array all the names of the people who live in California and have a job as a "Senior QA Engineer" and have "cooking" as a hobby, and sort them alphabetically.
  
  // Question 8: Extract to an array all the responsibilities of the people who live in Chicago and are currently employed as "Senior Data Analysts".
  
  // Question 9: Extract to an array of objects with the names of all the people who have "hiking" as a hobby and a field "job_experience" which is the sum of the number of months they have worked in each job.
  
  // Question 10: Extract to an array of objects with the names of all the people who have "traveling" as a hobby, and create a new field "most_recent_job" which is an object containing the company, position, and start date of their most recent job.
  
  // Question 11: Extract to an array of objects with the name of all the people who have "yoga" as a hobby, and create a new field "job_history" which is an array of objects containing the company, position, start date, and end date of all the jobs they have held.


  
 