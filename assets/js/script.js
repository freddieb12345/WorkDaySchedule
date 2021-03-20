var dateDisplayEl = $('#date-display');
var timeBlock = $('.time-block');
var currentTime = moment().hours();

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateDisplayEl.text(rightNow);
  }
setInterval(displayTime, 1000);

timeBlock.each(function() {
  var hour = parseInt($(this).attr('id'));
  console.log(hour);

  if (hour === currentTime) {
    $(this).children(".col-sm-10").attr("class","present col-sm 10 description");
  } else if(hour < currentTime) {
    $(this).children(".col-sm-10").attr("class","past col-sm 10 description");
  } else {
    $(this).children(".col-sm-10").attr("class","future col-sm 10 description");
  }
});