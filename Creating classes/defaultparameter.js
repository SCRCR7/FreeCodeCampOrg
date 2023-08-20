function noDefaultParam(num){
    console.log("number is ",num*num)

}
function DefaultParam(num=2,num2=8){
console.log(num*num2)
    
}

noDefaultParam(); // Nan 
noDefaultParam(4); // result 
// default parameter is when we passsing it in the parameter let do this 

// number is nan no argumnet passes
DefaultParam();