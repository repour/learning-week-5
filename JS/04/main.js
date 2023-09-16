import './style.css'

const givenStr = prompt("please enter your words");

function increaseNumbOfStr(str) {
  let arrFromStr = str.split("");
  let arrOfNumbInStr = 0;
  for (let i = arrFromStr.length - 1; i >= 0; i--) {
    if (!isNaN(+arrFromStr[i])) {
      ++arrOfNumbInStr;
    }
  }
  if (arrOfNumbInStr) {
    const firstPartStr = str.slice(0,-arrOfNumbInStr);
    const secondPartStr = Number(str.slice(-arrOfNumbInStr)) + 1; 
    str = firstPartStr + secondPartStr;
  }else{
    str = str + 1;
  }

  return str;
}

console.log(increaseNumbOfStr(givenStr));