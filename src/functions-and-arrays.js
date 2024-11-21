// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2){
        return num1;
    } else{
        return num2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if( words === undefined || words.length === 0){
        return null;
    }
    // start with setting max length to 0
    let maxLength = 0;
    let maxInd = 0;
    let ind = 0;
    words.forEach(function(elem){
        if (elem.length > maxLength){
            // update if the current word is bigger than last max length stored
            maxLength = elem.length;
            maxInd = ind;
        }
        ind++;
    });
    return words[maxInd];
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
    let sum = 0;
    numbers.forEach((elem)=> sum += elem)
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = sumNumbers(numbers2);
    if(sum !== 0){
        return sum / numbers2.length;
    } else{
        return sum;
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToSearch) {
    let isExist = false;
    if( words.length === 0 || wordToSearch.length === 0){
        return null;
    }
    for( const elem of words){
        if(wordToSearch === elem){
            isExist = true;
            break;
        }
    }

    return isExist;
}
