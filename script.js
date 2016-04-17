// Scroll to the very bottom and change the argument in PopulateCalendar() to change the month view.

var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var days = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31 ]
var daysPerMonth = [ 31,28,31,30,31,30,31,31,30,31,30,31 ] // doesn't take leap years into account, feb = 29

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


// APPENDING TO THE DOM ////////////////////////////////////////////////////////

function populateHeader(whichMonth) {
  var section = '<section></section>';
  var header  = '<header></header>';
  var hgroup  = '<hgroup></hgroup>';
  var main    = '<main></main>';
  var h2      = '<h2></h2>';
  var h4      = '<h4></h4>';

  $('body').prepend(section);
  $('section').append(header);
  $('header').append(h2);
  $('h2').text(months[whichMonth] + " " + year);
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
}

function populateWeeks(whichMonth) {
  var ul      = '<ul></ul>';

  $('main').append(ul);
  $('main ul:nth-child(1)').addClass('week1');
  $('main').append(ul);
  $('main ul:nth-child(2)').addClass('week2');
  $('main').append(ul);
  $('main ul:nth-child(3)').addClass('week3');
  $('main').append(ul);
  $('main ul:nth-child(4)').addClass('week4');
  $('main').append(ul);
  $('main ul:nth-child(5)').addClass('week5');
  $('main').append(ul);
  $('main ul:nth-child(6)').addClass('week6');
}

function firstDay(whichMonth) {
  var parsed = Date.parse( ( months[whichMonth] ) + '1, ' + year );
  return new Date (parsed).getDay();
}

function populateDays(whichMonth, blank) {
  var li      = '<li></li>';

  for (b = 0; b < 7; b++) {
    $('.week' + b).append(li);
    $('.week' + b + ' li:nth-child(7n-6)').text((b*7)-6-blank);
    $('.week' + b).append(li);
    $('.week' + b + ' li:nth-child(7n-5)').text((b*7)-5-blank);
    $('.week' + b).append(li);
    $('.week' + b + ' li:nth-child(7n-4)').text((b*7)-4-blank);
    $('.week' + b).append(li);
    $('.week' + b + ' li:nth-child(7n-3)').text((b*7)-3-blank);
    $('.week' + b).append(li);
    $('.week' + b + ' li:nth-child(7n-2)').text((b*7)-2-blank);
    $('.week' + b).append(li);
    $('.week' + b + ' li:nth-child(7n-1)').text((b*7)-1-blank);
    $('.week' + b).append(li);
    $('.week' + b + ' li:nth-child(7n-0)').text((b*7)-0-blank);
  }
}

function hideOverflow(whichMonth) {
  for (c = 1; c < 8; c++) {
    var week1LiToCheck = $('ul.week1 li:nth-child(' + c + ')').text();
    if ( Number(week1LiToCheck) < 1) {
      $('ul.week1 li:nth-child(' + c + ')').css('display', 'none');
    }
    var week5LiToCheck = $('ul.week5 li:nth-child(' + c + ')').text();
    if ( Number(week5LiToCheck) > daysPerMonth[whichMonth]) {
      $('ul.week5 li:nth-child(' + c + ')').css('display', 'none');
    }
    var week6LiToCheck = $('ul.week6 li:nth-child(' + c + ')').text();
    if ( Number(week6LiToCheck) > daysPerMonth[whichMonth]) {
      $('ul.week6 li:nth-child(' + c + ')').css('display', 'none');
    }
  }
}

function highlightToday(whichMonth) {
  for (c = 1; c < 8; c++) {
    var week1LiToCheck = $('ul.week1 li:nth-child(' + c + ')').text();
    if ( Number(week1LiToCheck) == date) {
      $('ul.week1 li:nth-child(' + c + ')').css('color', '#666').css('font-weight', '400').css('background', '#e0e0e0');
    }
    var week2LiToCheck = $('ul.week2 li:nth-child(' + c + ')').text();
    if ( Number(week2LiToCheck) == date) {
      $('ul.week2 li:nth-child(' + c + ')').css('color', '#666').css('font-weight', '400').css('background', '#e0e0e0');
    }
    var week3LiToCheck = $('ul.week3 li:nth-child(' + c + ')').text();
    if ( Number(week3LiToCheck) == date) {
      $('ul.week3 li:nth-child(' + c + ')').css('color', '#666').css('font-weight', '400').css('background', '#e0e0e0');
    }
    var week4LiToCheck = $('ul.week4 li:nth-child(' + c + ')').text();
    if ( Number(week4LiToCheck) == date) {
      $('ul.week4 li:nth-child(' + c + ')').css('color', '#666').css('font-weight', '400').css('background', '#e0e0e0');
    }
    var week5LiToCheck = $('ul.week5 li:nth-child(' + c + ')').text();
    if ( Number(week5LiToCheck) == date) {
      $('ul.week5 li:nth-child(' + c + ')').css('color', '#666').css('font-weight', '400').css('background', '#e0e0e0');
    }
    var week6LiToCheck = $('ul.week6 li:nth-child(' + c + ')').text();
    if ( Number(week6LiToCheck) == date) {
      $('ul.week6 li:nth-child(' + c + ')').css('color', '#666').css('font-weight', '400').css('background', '#e0e0e0');
    }
  }
}

function populateCalendar(whichMonth) {
  populateHeader(whichMonth);
  populateWeeks(whichMonth);
  populateDays(whichMonth, firstDay(whichMonth));
  hideOverflow(whichMonth);
  highlightToday(whichMonth);
}

populateCalendar(month);
// 0 = January of current year
// 1 = February of current year
// 3 = March of current year
// ...
// month = Current Month
