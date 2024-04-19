// Question 115
let num = 5;
switch (num) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;
}
// Question 116
function LogSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break;
        default:
            console.log("Invalid Month");
            break;
    }
}
LogSeason(12);
// Question 117
let expression = 5;
switch (expression * 4) {
    case 45:
        console.log("Your answer is evaluate true.");
        break;
    default:
        console.log("Your answer is not evaluate true.");
        break;
}
export {};
i learn about switch statement , how to handle multiple cases at a time and execute same block of code.