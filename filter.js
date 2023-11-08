//filter method is used to filter the particular values
const array=[1,2,3,4,5,6,7];
const result=array.filter(myFunction);
function myFunction(age){
    return age>3;
}
console.log(result);