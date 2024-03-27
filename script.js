//! task 1
//! Create your own resume data in JSON format
/*
const myResume = [
  {
    "name": "Charan",
    "age": 25,
    "gender": "male",
    "phone": 9578741769,
    "language": "Tamil,Enlish",
    "degree": "B.E",
    "city": "Chennai",
    "state": "Tamilnadu",
    "country": "India"
  },
];
*/

//! task 2
//! For the above JSON, iterate over all for loops(for,for in,for of,forEach)
//resume data
const myResume = [
  {
    name: "Charan",
    age: 25,
    gender: "male",
    phone: 9578741769,
    language: "Tamil,Enlish",
    degree: "B.E",
    city: "Chennai",
    state: "Tamilnadu",
    country: "India",
  },
];

//for loop

for (let i = 0; i < myResume.length; i++) {
  console.log(myResume[i]);
}

//for in loop

for (let key in myResume) {
  console.log(myResume[key]);
}

//for of loop

for (let key of myResume) {
  console.log(key);
}

//forEach loop

Object.keys(myResume).forEach((key) => {
  console.log(myResume[key]);
});
