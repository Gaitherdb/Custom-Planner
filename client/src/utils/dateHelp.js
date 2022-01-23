class dateHelp {

  getYear(value) {
    if (value) {
      return value.toString().split(' ').slice(3, 4)[0];
    }
    return new Date().toString().split(' ').slice(3, 4)[0];
  }

  getDay(value) {
    if (value) {
      return value.toString().split(' ').slice(2, 3)[0];
    }
    return new Date().toString().split(' ').slice(2, 3)[0];
  }

  getMonth(value) {
    if (value) {
      return value.split('').slice(4, 6).join().replace(/,/g, "")
    }
    //no need to get new date info bc the calendar uses letters
  }

  getMonthLetters(value) {
    if (value) {
      return value.toString().split(' ').slice(1, 2)[0];
    }
    return new Date().toString().split(' ').slice(1, 2)[0];
  }



  monthConversion(monthLetters) {
    var month;

    switch (monthLetters) {
      case 'Jan':
        month = "01";
        break;
      case 'Feb':
        month = "02";
        break;
      case 'Mar':
        month = "03";
        break;
      case 'Apr':
        month = "04";
        break;
      case 'May':
        month = "05";
        break;
      case 'Jun':
        month = "06";
        break;
      case 'Jul':
        month = "07";
        break;
      case 'Aug':
        month = "08";
        break;
      case 'Sep':
        month = "09";
        break;
      case 'Oct':
        month = "10";
        break;
      case 'Nov':
        month = "11";
        break;
      case 'Dec':
        month = "12";
        break;
    }
    return month;
  }

  monthFullName(value) {
    var month;
    switch (value) {
      case '01':
        month = "January";
        break;
      case '02':
        month = "Feburary";
        break;
      case '03':
        month = "March";
        break;
      case '04':
        month = "April";
        break;
      case '05':
        month = "May";
        break;
      case '06':
        month = "June";
        break;
      case '07':
        month = "July";
        break;
      case '08':
        month = "August";
        break;
      case '09':
        month = "September";
        break;
      case '10':
        month = "October";
        break;
      case '11':
        month = "November";
        break;
      case '12':
        month = "December";
        break;
    }
    return month;

  }
}

export default new dateHelp();