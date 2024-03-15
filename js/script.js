import Student from "./student.js";
const form = document.getElementById('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const [name, birthday, point] = document.querySelectorAll('#name, #birthday, #point');
    console.log(name.value, birthday.value, point.value)
    const student = new Student(name.value, birthday.value, point.value);
    console.log(student.addStudent());
})
const  displayStudents = function (){
   return  Student.allStudents().then(function(response){
        return response.map((student) => {
            const {id, name, birthday, point} = student
            return `<tr>
                       <td>${id}</td>
                       <td>${name}</td>
                       <td>${birthday}</td>
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