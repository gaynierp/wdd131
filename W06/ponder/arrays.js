let courses = ["WDD131", "WDD231", "ITM220", "CSE210"];

console.log(courses[0]);
console.log(courses[3]);

let courseAndGPA = ["WDD131", 3.7, "ITM110", 4];
console.log(courseAndGPA[3]);

// javascript object
let classes = [
  {
    courseName: "WDD131",
    courseGPA: 3.7,
    professor: "Bro Warner",
    assignments: [
      {
        assignmentName: "W01 Prove",
        assignmentGrade: 100,
      },
    ],
  },
  {
    courseName: "CSE110",
    courseGPA: 4,
    professor: "Bro Goderridge",
  },
];

console.log(classes[0].assignments[0].assignmentGrade);

console.log("\n");

for (let i = 0; i < classes.length; i++) {
  console.log(classes[i].courseName);
  console.log(classes[i].courseGPA);
}
console.log("\n");

classes.forEach((item) => {
  console.log(item.professor);
  console.log(item.courseName);
});

let body = document.querySelector("body");

classes.forEach((course) => {
  let dynamicHTML = `
        <div>
            <h1>${course.courseName}</h1>
            <h2>${course.courseGPA}</h1>
        </div>
`;
  body.innerHTML += dynamicHTML;
});
