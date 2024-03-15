import {ENDPOINT} from "./endpoint.js";

export default class Student {

        construtor(name, age, note){
            this.name = name
            this.age = age
            this.note = note
    }
    static  allStudents = async function () {
       const response = await fetch(ENDPOINT)
        return await response.json();

    }


}