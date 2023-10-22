const display=document.getElementById('display');
const clearBtn=document.getElementById('clearBtn');

clearBtn.addEventListener('click',()=>{
    display.value="";
})

// document.querySelectorAll('.number').forEach((elem)=>{
//     elem.addEventListener('click',()=>{
//         if(elem.innerHTML==='=') solve();
//         else{
//             if(elem.innerHTML!=='.') display.value+=elem.innerHTML;
//             else if(display.value.length>0 && display.value.substr(display.value.length - 1)!=='.') display.value+=elem.innerHTML;
//         }
//     })
// })

document.querySelectorAll('.number').forEach((elem)=>{
    elem.addEventListener('click',()=>{
        if(elem.innerHTML==='=') solve();
        else display.value+=elem.innerHTML;
    })
})


// document.querySelectorAll('.operator').forEach((elem)=>{
//     elem.addEventListener('click',()=>{
//         switch(elem.innerHTML){
//             case '-':
//                 display.value+=elem.innerHTML;
//                 break;
//             case '+':
//                 var lastChar=display.value.substr(display.value.length - 1);
//                 if(lastChar==='x' || lastChar==='/'){
//                     display.value=display.value.substr(0,display.value.length-1)+'+';
//                 }
//                 else display.value+='+';
//                 break;
//             case 'x':
//                 if(display.value.length>0 && display.value.substr(display.value.length - 1)==='+'){
//                     display.value=display.value.substr(0,display.value.length-1)+'*';
//                 }
//                 else if(display.value.length>0 && display.value.substr(display.value.length - 1)==='-'){
//                     display.value=display.value.substr(0,display.value.length-1)+'*';
//                 }
//                 else if(display.value.length>0 && display.value.substr(display.value.length - 1)==='/'){
//                     display.value=display.value.substr(0,display.value.length-1)+'*';
//                 }
//                 else if(display.value.length>0 && display.value.substr(display.value.length - 1)!=='x'){
//                     display.value+='*';
//                 }
//                 break;

//             case '/':
//                 if(display.value.length>0 && display.value.substr(display.value.length - 1)==='+'){
//                     display.value=display.value.substr(0,display.value.length-1)+'/';
//                 }
//                 else if(display.value.length>0 && display.value.substr(display.value.length - 1)==='-'){
//                     display.value=display.value.substr(0,display.value.length-1)+'/';
//                 }
//                 else if(display.value.length>0 && display.value.substr(display.value.length - 1)==='x'){
//                     display.value=display.value.substr(0,display.value.length-1)+'/';
//                 }
//                 else if(display.value.length>0 && display.value.substr(display.value.length - 1)!=='/'){
//                     display.value+='/';
//                 }
//                 break;
//         }

//     })
// })


document.querySelectorAll('.operator').forEach((elem)=>{
    elem.addEventListener('click',()=>{
        if(elem.innerHTML==='x') display.value+='*';
        else display.value+=elem.innerHTML;
    })
})



function solve() { 
    try {
        let ans=math.evaluate(display.value);
        let res=parseFloat(ans);
        res=(res*1000)/1000;
        console.log(res);
        display.value=res;
    } catch (error) {
        display.value="Invalid syntax!";
    }
}