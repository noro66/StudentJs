import Student from "./student.js";

const  displayStudents = function (){
   return  Student.allStudents().then(function(response){
        return response.map((student) => {
            const {id, name, age, point} = student
            return `<tr>
                       <td>${id}</td>
                       <td>${name}</td>
                       <td>${age}</td>
                       <td>${point}</td>
                       <td><button class="btn btn-danger btn-sm ">Delete</button></td>
                   </tr>`;
        })
    })

}
displayStudents().then((response) => {
    const  body = document.getElementById('list-student').innerHTML = response.join('');
    // console.log(response.join(' '));
});