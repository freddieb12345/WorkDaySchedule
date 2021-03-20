var dateDisplayEl = $('#date-display');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);