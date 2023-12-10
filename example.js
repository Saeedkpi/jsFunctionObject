/* function functionName(parameter) {
    function_body;
    return;
}

var returnValue = functionName(parameter value);

 */

function getAverage (assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1marks = 60;
const assignment2marks = 58;
const assignment3marks = 59;

var myAverage = getAverage(assignment1marks, assignment2marks, assignment3marks);
console.log("My average so far:", myAverage);