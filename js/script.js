import Student from "./student.js";
const form = document.getElementById('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const [name, birthday, point] = document.querySelectorAll('#name, #birthday, #point');
    // console.log(name.value, birthday.value, point.value)
    const student = new Student(name.value, birthday.value, point.value);
    console.log(student.addStudent(), student.getAge);
})

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteBtn')) {
        let  id = event.target.dataset.id;
        console.log(id);
        Student.deleteStudent(id).then(r => console.log(r));
    }
});


const  displayStudents = function (){
   return  Student.allStudents().then(function(response){
        return response.map((data, index) => {
            const {id ,name, birthday, point} = data
           const student =  new Student(name, birthday, point)
            return `<tr>
                       <td>${id}</td>
                       <td>${name}</td>
                       <td>${student.getAge()}</td>
                       <td><span class="badge bg-primary p-2">${point} / 100 ${student.isAdmitted() ? 'Admitted' : 'NotAdmitted'}</span></td>
                       <td><button data-id="${id}" class="btn deleteBtn btn-danger btn-sm ">Delete</button></td>
                   </tr>`;
        })
    })

}

displayStudents().then((response) => {
    const  body = document.getElementById('list-student').innerHTML = response.join('');
    // console.log(response.join(' '));
});