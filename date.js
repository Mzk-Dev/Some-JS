let date = new Date(2012, 0, 3);
function getWeekDay(date) {//Возвращает день недели
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}
alert( getWeekDay(date) );



function getLocalDay(date) {//Возвращает день недели в евр нумерации
    let day = date.getDay();
    if (day == 0) { 
      day = 7;
    }
    return day;
}

alert( getLocalDay(date) );

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
let date1 = new Date(2015, 0, 2);
  
alert( getDateAgo(date1, 1) ); 
alert( getDateAgo(date1, 2) ); 
alert( getDateAgo(date1, 365) );


function getLastDayOfMonth(year, month) {//Ласт день месяца
    let date2 = new Date(year, month + 1, 0);
    return date2.getDate();
}
alert( getLastDayOfMonth(2012, 0) ); 
alert( getLastDayOfMonth(2012, 1) ); 
alert( getLastDayOfMonth(2013, 1) ); 