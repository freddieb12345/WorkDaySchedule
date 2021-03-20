var dateDisplayEl = $('#date-display');
var timeBlock = $('.time-block');
var currentTime = moment().hours();
var saveBtn = $('.saveBtn');

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

saveBtn.on('click', function (event){
  event.preventDefault();
  console.log($(this).siblings().eq(1).val());
   
  var text = $(this).siblings().eq(1).val();
  var parent = $(this).parent().attr('id');
  localStorage.setItem(parent, JSON.stringify(text));
})

$('#9 textarea').val(localStorage.getItem('9'));
$('#10 textarea').val(localStorage.getItem('10'));
$('#11 textarea').val(localStorage.getItem('11'));
$('#12 textarea').val(localStorage.getItem('12'));
$('#13 textarea').val(localStorage.getItem('13'));
$('#14 textarea').val(localStorage.getItem('14'));
$('#15 textarea').val(localStorage.getItem('15'));
$('#16 textarea').val(localStorage.getItem('16'));
$('#17 textarea').val(localStorage.getItem('17'));
