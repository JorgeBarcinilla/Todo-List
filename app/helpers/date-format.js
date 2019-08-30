import { helper } from '@ember/component/helper';

export default helper(function dateFormat(params/*, hash*/) {
  var date = new Date(params[0]);
  var day = date.getDate().toString();
  var dayName = date.getDay();
  var month = date.getMonth();
  var year = date.getFullYear().toString();
  return DayName(dayName) + " " + day + 
        ", " + monthName(month) + " " + year;
});

function DayName(x){
  switch(x){
    case 1:
      return "Monday"
    case 2:
     return "Tuesday"
    case 3:
     return "Wednesday"
    case 4:
     return "Thursday"
    case 5:
     return "Friday"
    case 6:
     return "Saturday"
    case 7:
     return "Sunday"
  }
}


function monthName (x) {
  switch (x) {
    case 0:
     return "January"
    case 1:
     return "February"
    case 2:
     return "March"
    case 3:
     return "April"
    case 4:
     return "April"
    case 5:
     return "June"
    case 6:
     return "July"
    case 7:
     return "August"
    case 8:
     return "September"
    case 9:
     return "October"
    case 10:
     return "November"
    case 11:
     return "December"
  }
}

