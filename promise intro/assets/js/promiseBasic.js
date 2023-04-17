let cl = console.log;
// Promise>> It is a object, which goves some value in future
// To handle async oparations
// threre are 4 states of promises

// Pending>> waiting for result
// Fullfilled/resolve>> Action related to promise is success
// Reject>> Action related to promise is failed
// Settled >> Promise is either fullfilled or reject
// Benefites of Promise

// 1 Improves readibility of code
// 2 Better handling of asnychronised operation
// 3 better error handling
// 4 better flow of control defination 
// const loginBtn=document.getElementById("loginBtn");
const loginForm = document.getElementById('loginForm');
const userName = document.getElementById("userName");
const password = document.getElementById("password");


let promise1 = new Promise(function (resolve, reject) {
    // { email:"", password:""}
    let error = true;
    if (!error) {
        resolve(`Successfully Login`)
    } else {
        reject(`Invalid Username or Password`)

    }
})

promise1

    .then(function (res) {
        cl(res)
    })
    .catch(function (err) {
        cl(err)
    })


const OnLogin = (eve) => {

    eve.preventDefault();
    let un = userName.value;
    let pass = password.value;

    let promise = new Promise((resolve, reject) => {
        if (un.toLoweCase() === "Jhon" && pass === "Jhon@123") {
            resolve(`Successfully Login`)
        } else {
            reject(`Invalid Username Or Password`)
        }
    })
    promise.then((res) => {
        cl(res)
        Swal.fire({
            icon: 'success',
            title: res,
            showConfirmButton: false,
            timer: 3000
        })
    })
    promise.catch((err) => {
        cl(err)
        Swal.fire({
            icon: 'reject',
            showConfirmButton: true,
            title: err,
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>',
            timer: 3000
        })
    })
        .finally(() => {
            loginForm.reset()
        })
}

loginForm.addEventListener("submit", OnLogin)