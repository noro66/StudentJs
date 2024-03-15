import Student from "./student.js";

const  displayStudents = function (){
    Student.allStudents().then(function(response){
        const tableBody = response.map((student) => {
            console.log(student.id)
        })
    })

}
displayStudents();