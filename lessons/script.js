

let testScore = 30;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 75:
        letterGrade = "B";
        break;
    case testScore >=60:
        letterGrade = "C";
        break;
    case testScore >=45:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
        break;
}

console.log(letterGrade)