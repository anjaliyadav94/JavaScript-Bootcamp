
const scorePercent = function (studentScore, totalPossibleScore) {

    const percent = (studentScore / totalPossibleScore) * 100
    let letterGrade = ''

    // if (percent >= 90) {
    //     letterGrade = 'A'
    // } else if (percent >= 80) {
    //     letterGrade = 'B'
    // } else if (percent >= 70) {
    //     letterGrade = 'C'
    // } else if (percent >= 60) {
    //     letterGrade = 'D'
    // } else {
    //     letterGrade = 'F'
    // }
    switch(true) {
        case (percent >= 90) :
            letterGrade = 'A'
            break;
        case (percent >=80) :
            letterGrade = 'B'
            break;
        case (percent >=70) :
            letterGrade = 'C'
            break;
        case (percent >=60) :
            letterGrade = 'D'
            break;
        default :
            letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${percent}%)!`
}

const score = scorePercent(17, 20)
console.log(score)



//if (studentScore >=90 && studentScore <= 100) {
   // return `You got a `