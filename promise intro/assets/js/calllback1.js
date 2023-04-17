let cl = console.log;

function makeHrCall(profile) {
    if (profile.toLowerCase().trim().includes("angular")) {
        cl(`Candidate is shortlisted for tech Interview`)
        firstTechInterview()
    } else {
        cl(
            `Looking for a Candidate`
        )
    }
}

function firstTechInterview() {
    let flag = Math.random();
    if (flag >= .7) {
        cl(`Candidate is shortlisted for secTech Interview`)
        secTechInterview()
    } else {
        cl(`Candidate is struggling to explain Basic of angular`)
    }
}

function secTechInterview() {
    let flag = Math.random();
    if (flag >= .5) {
        cl(`Candidate is shortlisted for ML Round`)
        MLRound()
    } else {
        cl(` Candidate is Stuggling to Write a code`)
    }
}

function MLRound() {
    if (Math.round() >= 7) {
        cl(`Candidate Selected`)
    } else {
        cl(`Candidate Rejected`)
    }
}

makeHrCall("angular")