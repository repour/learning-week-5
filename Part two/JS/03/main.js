import './style.css'
const givenNumb = Number(prompt("please enter tour number"));

function convertToHour(numb) {
  let ourDate = new Date(numb * 1000 - 12600000);
  let h = "";
  let m = "";
  let s = "";
  let day = "";
  let month = "";
  let year = "";

  if(ourDate.getFullYear() > 1970){
    year = `${ourDate.getFullYear() - 1970} Year`;  
  }
  if(ourDate.getMonth() > 0){
    month = `, ${ourDate.getMonth()} Month`;  
  }
  if(ourDate.getDate() > 1){
    day = `, ${ourDate.getDate() - 1} Day`;  
  }
  if (ourDate.getHours()) {
    h = `, ${ourDate.getHours()} Hour`;
  }
  if (ourDate.getMinutes()) {
    m = `, ${ourDate.getMinutes()} Minute`;
  }
  if (ourDate.getSeconds()) {
    s = ` and ${ourDate.getSeconds()} Second`;
  }

  
console.log(`${year}${month}${day}${h}${m}${s}`);
}
convertToHour(givenNumb);