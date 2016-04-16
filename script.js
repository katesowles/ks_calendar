// DATE PREPARATION ////////////////////////////////////////////////////////////

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var daysPerMonth = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'] // doesn't take leap years into account, feb = 29
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

var sun = 0;
var mon = 1;
var tue = 2;
var wed = 3;
var thu = 4;
var fri = 5;
var sat = 6;

var today = new Date();
var year  = today.getFullYear();
var month = today.getMonth();
var date  = today.getDate();
var day   = today.getDay();
var wday  = weekdays[today.getDay()].substring(0,3);
var daysLeft = daysPerMonth[month] - date;

var section = '<section></section>';
var header  = '<header></header>';
var hgroup  = '<hgroup></hgroup>';
var main    = '<main></main>';
var h2      = '<h2></h2>';
var h4      = '<h4></h4>';
var div     = '<div></div>';
var ul      = '<ul></ul>';
var li      = '<li></li>';

// APPENDING TO THE DOM ////////////////////////////////////////////////////////

$('body').prepend(section);
$('section').append(header);
$('header').append(h2);
$('h2').text(months[month]);

$('section').append(hgroup);
$('hgroup').append(h4);
$('h4:nth-child(1)').text(weekdays[0].substring(0,3));
$('hgroup').append(h4);
$('h4:nth-child(2)').text(weekdays[1].substring(0,3));
$('hgroup').append(h4);
$('h4:nth-child(3)').text(weekdays[2].substring(0,3));
$('hgroup').append(h4);
$('h4:nth-child(4)').text(weekdays[3].substring(0,3));
$('hgroup').append(h4);
$('h4:nth-child(5)').text(weekdays[4].substring(0,3));
$('hgroup').append(h4);
$('h4:nth-child(6)').text(weekdays[5].substring(0,3));
$('hgroup').append(h4);
$('h4:nth-child(7)').text(weekdays[6].substring(0,3));

$('section').append(main);
$('main').append(ul);

function addRemainingDays(whichMonth) {
  for (j = 0; j = daysPerMonth[whichMonth]; j++) {
    $('ul').append(li);
      $('ul li:nth-child(l)').text('l');
  }
  return day + daysLeft;
};




addRemainingDays(3);
dayCount();
