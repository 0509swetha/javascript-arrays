//reverse array program
function reversedArray(array){
    var reversedArray=[];
    for(i=array.length-1;i>=0;i--){
        reversedArray.push(array[i]);
    
    }
    return reversedArray;
}
var array=[1,2,3,4,5];
var reversed=reversedArray(array);
console.log(reversed);