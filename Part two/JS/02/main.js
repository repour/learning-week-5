import './style.css'
const givenStr = prompt("please enter your string before each new line you can use /n");
const givenSymbolForComment = prompt("enter your comment symbols seperated by comma").split(",")

function removeComments(inputString, commentSymbols) {

  const lines = inputString.split('\n');

  for (let i = 0; i < lines.length; i++) {
    for (const symbol of commentSymbols) {
      const index = lines[i].indexOf(symbol);
      if (index !== -1) {
        lines[i] = lines[i].substring(0, index);
        break; 
      }
    }
  }

  return lines.join('\n').trimEnd();
}


const result = removeComments(givenStr, givenSymbolForComment);

console.log(result); 
