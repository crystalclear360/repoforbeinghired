//2 - How do you update an array keeping functional programming principles in mind?

let students = [
    "stud1",
    "stud2",
    "stud3",
    "stud4",
    "stud5",
]

const updateStudents = (studentList ) => [...studentList.map((student) => "New " + student)]
//update
students = updateStudents(students);
