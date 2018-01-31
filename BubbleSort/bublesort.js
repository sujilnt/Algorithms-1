/*
  Write a bubble sort here
  Name the function bubbleSort

  If you want to suspend running the unit tests, change describe to xdescribe

  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order

  Provided is an optional visualization helper. Call snapshot(yourArray) at the
  beginning of each iteration of your inner loop with the state of the being-sorted
  array and the helper tool will show you how your array looks in the HTML section
  of CodePen. This is optional and only for your help.

*/

function Bubblesort(arr){
    lengthOfArray=arr.length;
    if(arr.lengthOfArray<2){
        return arr;
    }

    for(let i=0;i<lengthOfArray;i++){
        for(let j=0,temp=0;j<lengthOfArray;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log("running successfully bubble Sort Program",Bubblesort([10,5,3,8,2,6,4,7,9,1]));
console .log(" Verify The Ouptut is [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]");
/*
bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]
*/
