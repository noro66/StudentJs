import {ENDPOINT} from "./endpoint.js";

export default class Student {

        construtor(name, age, note, points){
            this.name = name
            this.age = age
            this.points = points
    }
    static  allStudents = async function () {
       const response = await fetch(ENDPOINT)
        return await response.json();
    }
}