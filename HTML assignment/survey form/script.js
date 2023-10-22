const surveyForm=document.getElementById("surveyForm");
const popupArea = document.getElementById("popupArea");
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const nameRegex = /^[A-Za-z]+$/;

document.getElementById("resetBtn").addEventListener("click", function() {
    surveyForm.reset();
});

document.getElementById("submitBtn").addEventListener("click", function() {
    
    const formData = new FormData(surveyForm);
    let popupData = "<h3>Survey Form Answers</h3>";
    let totalQue=3;
    for(const [key, val] of formData.entries()){
        console.log("key :",key);
        console.log("val :",val);
        if(key==='name'){
            if(val===''){alert("Enter your name");return;}
            else if(!nameRegex.test(val)){alert("Enter a valid name");return;}
        }
        else if(key==='email'){
            if(val===''){alert("Enter your email");return;}
            else if(!emailRegex.test(val)){alert("Enter a valid email");return;}
        }
        else if(key[0]==='Q') totalQue--;
        popupData+=`<p><strong>${key}:</strong> ${val}</p>`;
    }
    if(totalQue>0){alert("All Questions should be answered");return;}
    const popup = document.getElementById("popup");
    popup.style.display="block";
    popupArea.innerHTML=popupData;
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
    surveyForm.reset();
});
