import {ENDPOINT} from "./endpoint.js";

export default class Student {

        constructor(name, birthday, point){
            this.name = name
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
                    name: this.name,
                    birthday: this.birthday,
                    point: this.point
                })
            }).then(response => response)
                .catch(reportError => reportError);
    }
}