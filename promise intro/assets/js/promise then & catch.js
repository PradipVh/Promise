let cl = console.log;

function hrCall(profile) {
    let p = new Promise((resolve, reject) => {
        if (profile.toLowerCase().includes("angular")) {
            resolve(`Candidate shortlisted for 1st tech interview`)
        } else {
            reject(`Looking for New Candidate`)
        }
    })
    return p;
}


function firstTechInterview() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {


            let person = Math.random();
            if (person >= .3) {
                resolve(`Candidate selected for 2nd tech Round`)
            } else {
                reject(`Candidate struggling to Explain Basics of Angular`)
            }
        }, 3000);
    })
}

function secTechInterview() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let person1 = Math.random();
            if (person1 >= 0.2) {
                resolve(`Candidate Seleccted for ML Round`)
            } else {
                reject(`Candidate Rejected`)
            }
        }, 3000);

    })
}

function mlRound() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() >= .2) {
                resolve(`Candidate is shortlisted for given profile`)
            } else {
                reject(`Candidate is not shortlisted`)
            }
        }, 6000);
    })
}




let candidateProfile = Math.random() > .2 ? "Angular" : "React"
hrCall(candidateProfile)
    .then(res => {
        cl(res)

        return firstTechInterview()

    })
    .then(res => {
        cl(res)

        return secTechInterview()
    })

    .then(res => {
        cl(res)
        return mlRound()
    })
    .then(res => {
        cl(res)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res,
            showConfirmButton: false,
            timer: 1500
          })
    })

    .catch(err => {
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