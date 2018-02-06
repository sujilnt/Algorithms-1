let binarySearch=function(arr,value){
    let arrlen=arr.length-1,low=arr[0],mid=0,high=arrlen,found=false;
    if(arrlen<1|| typeof value !== 'number'){
        console.log("invalid input => array,value ", arr,value);
        return false;
    }
    arr.sort(function (a,b){
        return a-b;
    });
    while(low<=high && found === false){
        mid=Math.floor((high+low)/2);
        console.log("mid",mid ,arr,value);
        if(value===arr[mid]){
            console.log("found",arr[mid],value);
            return 1;
        } else if(value<arr[mid]) {
             high=mid-1;
        } else{
            low=mid+1;
        }
    }
}

binarySearch([1,3,9,11,15,19,29, 5,24,7,6,],23);
binarySearch(23);
binarySearch('',"abc");