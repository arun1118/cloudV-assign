let arr=[5,9,0,2,3,6,7,1];
let n=arr.length;
let flag=true;

for(var i=0;i<n;i++){
    flag=true;
    times+=1;
    for(var j=0;j<n-i-1;j++){
        if(arr[j]<arr[j+1]){
            flag=false;
            var temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
        }
    }
    if(flag) break;
}

console.log("after sorting is descending order :",arr);