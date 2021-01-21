const readLineSync = require('readline-sync');
console.log("Welcome to Epoch Convertor Utility App\n");

function epochToHumandate(epochTime){
  /*convert it to a javascript timestamp by multiplying by 1000.*/
  const date2 = new Date(epochTime*1000);
  const year = date2.getFullYear();
  const month = date2.getMonth();
  const date3 = date2.getDate();
  const hours = date2.getHours();
  const minutes = date2.getMinutes();
  const seconds = date2.getSeconds();

  console.log(`year : ${year}\nmonth : ${month+1}\ndate : ${date3}\nhours : ${hours}\nminutes : ${minutes}\nseconds : ${seconds}\n`);

}
function humanDateToEpoch(year, month, date, hours, minutes, seconds){

  const date1 = new Date(year, month, date, hours, minutes, seconds);
  /*The getTime() function returns timestamp in milliseconds. We can get current unix timestamp in seconds using below code.*/
  const timestamp = Math.floor(date1.getTime()/1000.0);
  console.log(`Epoch Time is ${timestamp}\n`);

}

function epochConvertor(){

  let selectedOption = parseInt(readLineSync.question("Option 0 to leave the Epoch Convertor Utility Application\nOption 1 : Convert epoch to human-readable date.\nOption 2 : Convert human-readable date to epoch\nPlease provide your input\n"));

  console.log(`Hi, you have selected option: ${selectedOption}\n`);

  if(selectedOption==0){
     return selectedOption;
  }

  while(selectedOption!=0){

    switch(selectedOption){
      case 1:
      let epochTime = readLineSync.question("Please enter the epochTime\n");
      epochToHumandate(epochTime);
      break;
      case 2:
      const year = readLineSync.question("Please enter the year\n");
      const month = readLineSync.question("Please enter the month\n");
      const date = readLineSync.question("Please enter the date\n");
      const hours = readLineSync.question("Please enter the hours\n");
      const minutes= readLineSync.question("Please enter the minutes\n");
      const seconds = readLineSync.question("Please enter the seconds\n");
      /*the first month (January) is month number 0, so December returns month number 11.*/
      humanDateToEpoch(year, month-1, date, hours, minutes, seconds);
      break;
      default:
      console.log("Invalid Input\n");
      break;


    }

    selectedOption = parseInt(readLineSync.question("Please provide your input\n"));
    console.log(`Hi, you have selected option: ${selectedOption}\n`);
  }



}

const val = epochConvertor();
console.log("Thank you for using Epoch Convertor Utility App\n");