class dateHelp {

getYear(value){
    if(value) {
       return value.toString().split(' ').slice(3, 4)[0];
    }
   return new Date().toString().split(' ').slice(3, 4)[0];
}

getDay(value){
    if(value) {
        return value.toString().split(' ').slice(2,3)[0];
    }
    return new Date().toString().split(' ').slice(2,3)[0];
}

getMonthLetters(){
    return new Date().toString().split(' ').slice(1,2)[0];
}

getMonth(monthLetters){
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
    
    // console.log(year)
    // console.log(day)
    // console.log(month)
    // const  todayDate =   year + month + day;
}

    export default new dateHelp();