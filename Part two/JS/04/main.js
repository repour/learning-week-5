import './style.css'
const givenNumber = prompt("please enter your list of number seperated with comma").split(",");
function maxSequence(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let maxEndingHere = 0;
  let maxSoFar = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = Math.max(0, maxEndingHere + Number(arr[i]));
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}



const maxSum = maxSequence(givenNumber);
console.log(maxSum); 
