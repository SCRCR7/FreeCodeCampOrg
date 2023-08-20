class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(this.name,this.age);
             Walking(){
             this.name=!this.name;
             
        }

    }

}
var student_details = new student("sohaib", 19);
console.log(student_details);
student_details.Walking;