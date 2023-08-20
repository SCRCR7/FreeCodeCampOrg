class DfParam{
    constructor(num1=4,num2=3,name="sohaib"){ // default param
        this.num1=num1;
        this.num2=num2;
        console.log(this.num1*this.num2,name);
    }
}
// now we create an object 
var number=new DfParam(); // with argument 
