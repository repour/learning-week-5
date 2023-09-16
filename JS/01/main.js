import './style.css'
const givenStr = prompt("please enter your words with space between those");
const arrFromStr = givenStr.split(" ");

function sortWords(arry) {
  let result = arry.map((value) => {
    let valueCopy = value.split("");
    const findNumb = valueCopy.filter(value => Number(value))
    return valueCopy = [valueCopy.join(""),findNumb]
  })
  result.sort((a , b) => (a[1] - b[1]) )
  result = result.map((value) =>{
    const valueCopy = value[0];
    return valueCopy
  })
  return result.join(" ")
}
console.log(sortWords(arrFromStr));
