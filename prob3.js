//program to sort the given array
function bubbleSort(array){
    const length=array.length;
    for(i=0;i<length-1;i++){
        for(j=0;j<length-1-i;j++){
            if(array[j]>array[j+1]){
                const temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return array;
}
const array=[7,4,3,9,2,6,1];
const result=bubbleSort(array);
console.log(result);