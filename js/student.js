import {ENDPOINT} from "./endpoint.js";

export default class Student {

        constructor(id,name, birthday, point){
            this.name = name
            this.id = id
            this.birthday = birthday
            this.point = point
    }
    static  allStudents = async function () {
       const response = await fetch(ENDPOINT)
        return await response.json();
    }
    response;

    addStudent = async function(){
            return  await fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: this.id,
                    name: this.name,
                    birthday: this.birthday,
                    point: parseFloat(this.point)
                })
            }).then(response => response)
                .catch(reportError => reportError);
    }

   static deleteStudent = async function (id)
    {
        return  await fetch(ENDPOINT + '/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    isAdmitted = () =>{
       return  this.point >= 50
    }
    getAge = function(birthday) {
        return ((new Date()).getFullYear()) - (new Date(this.birthday).getFullYear());
    }

}