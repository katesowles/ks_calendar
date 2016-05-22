moment.locale();

function populateHeader() { // populates the month, year, and days of week
  const body    = '<body></body>';
  const section = '<section></section>';
  const header  = '<header></header>';
  const hgroup  = '<hgroup></hgroup>';
  const main    = '<main></main>';
  const h2      = '<h2></h2>';
  const h4      = '<h4></h4>';
  $('body').prepend(section);
  $('section').append(header);
  $('header').append(h2);
  $('h2').text(moment().format('MMMM YYYY'));
  $('section').append(hgroup);
  for (var a = 0; a < 7; a++) {
    $('hgroup').append(h4);
    $(`hgroup h4:nth-child(${(a+1)})`).text(moment().weekday(a-0).format('ddd'));
  }
  $('section').append(main);
}

function populateWeeks() {  // populates the number of weeks in the month
  // TODO: make this respond to first day of week so no additional elements are added than are needed
  const ul      = '<ul></ul>';
  for (var b = 0; b < 6; b++) {
    $('main').append(ul);
    $(`main ul:nth-child(${b})`).addClass(`week${b}`);

  }
}

function findFirstDay() { // returns day of the week for the first day of month
  return moment().date(1).format('d');
}

function populateDays(blankDays) {  // fills every week with days, takes into account the first day of the month and what day it falls into
  const li      =  '<li></li>';
  for (var c = 0; c < 6; c++) { // cycles through number of weeks
    for (var d = 0; d < 7; d++) { // cycles to add 7 days to each week
      $(`.week${c}`).append(li);
    }
    for (var e = 1; e <= 7; e++) { // cycles to add text and ids to each li with date
      $(`.week${c} li:nth-child(${(e)})`).text((c*7) - (7-(1*(e)) - blankDays));
      $(`.week${c} li:nth-child(${(e)})`).attr('id', ((c*7) - (7-(1*(e)) - blankDays)));
    }
  }
}

function hideOverflow() { // hides the unused days of the month
  // TODO: refactor so that we don't have to hide them, that they just don't show up
  for (var f = 1; f < 6; f++) { // to cycle through each week
    for (var g = 1; g < 8; g++ ) {  // to cycle through the days of each week
      var liToCheck = Number($(`ul.week${f} li:nth-child(${g})`).text());

      var lastDayOfMonth = moment().endOf('month').format('D');
      if ( liToCheck < 1 || liToCheck > lastDayOfMonth ) {  // if day is less than one, or greater than the last day of the month, hide it.
        $(`ul.week${f} li:nth-child(${g})`).css('display', 'none');
      }
    }
  }
}

function highlightToday() { // relying on the ids added during populateDays() to highlight today.
  $(`#${moment().format('D')}`).css('font-weight', '400').css('background', '#e0e0e0');
}

function populateCalendar() {
  populateHeader();
  populateWeeks();
  findFirstDay();
  populateDays(findFirstDay());
  hideOverflow();
  highlightToday();
}

populateCalendar();
