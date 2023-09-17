import './style.css'
const givenIsbn = prompt("please enter your ten number, seperated with comma");
const arryFromStr = givenIsbn.split(",");

function isbnChecking(arry) {
  let condition = false;
  if (arry[9] == "x") {
    arry[9] = 10;
  }
  const multiItems = arry.map((item,index) =>{
    item = item * (index + 1);
    return item;
  });
  const sumOfIsbn = multiItems.reduce((sum , item) => sum + item , 0);
  if (sumOfIsbn % 11 == 0) {
    condition = true;
  }
  return condition;
  
}

console.log(isbnChecking(arryFromStr));
