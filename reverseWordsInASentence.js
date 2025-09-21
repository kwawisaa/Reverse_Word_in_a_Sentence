const userInput = "Enter a phrase."; //YOU CAN CHANGE THE PHRASE/SENTENCE TO TEST MY PROGRAM
let result = "";

const splitInputs = userInput.split(' ');
for (let i=splitInputs.length-1; i>=0; i--){
    result += splitInputs[i];
    if(i>0){
        result += " "
    }
}

console.log("OUTPUT: \n" + result);


