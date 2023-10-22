function reverseString(str){
    let n=str.length;
    let ans="";
    for(var i=n-1;i>=0;i--) ans+=str[i];
    return ans;
}

let str=prompt("Please enter the sentence:");
let strarr=str.split(" ");
let resarr=strarr.map((elem)=>{
    return reverseString(elem);
})
let res=resarr.join(" ");
console.log(res);