cl=console.log;

const loginBtn=document.getElementById("loginBtn");
const loginForm=document.getElementById("loginForm");
function login(e){
    e.preventDefault()
    let error=(Math.random()>.5 )?false:true;

    if(!error){
        goToDashboard()
    }else{
        throwErrorMsg()
    }
    loginForm.reset()
}

// function goToDashboard(){
//     let error=(Math.random()>.5)?false:true;
//     if(!error){
//         alert(`Welcome to Dashboard`)
//     }else{
//        alert(`Something went wrong`)
//     }
// }


function goToDashboard(){
    let error=(Math.random()>.5)?false:true;
    if(!error){
        alert(`Welcome to Dashboard`)
    }else{
       throwErrorMsg()
    }
}

function throwErrorMsg(){
    cl(`Something went Wrong `)
}