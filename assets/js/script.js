var dateDisplayEl = $('#date-display'); /* puts the element with the #date-display ID inside of the variable dateDisplayEl */
var timeBlock = $('.time-block'); /* puts the element with the time-block class inside of the variable timeBlock */
var currentTime = moment().hours(); /* Saves current time */
var saveBtn = $('.saveBtn'); /* Saves the save button in a variable */

/* Creates function that updates the date and time every second and displats it inside the dateDisplayEl */
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateDisplayEl.text(rightNow);
  }
setInterval(displayTime, 1000);

/* Creates function that checks if the timeblock is in the past, present or future, and changes its color accordingly */
timeBlock.each(function() {
  var hour = parseInt($(this).attr('id')); /* for each timeblock element, convert the string value into and integer */

  if (hour === currentTime) {
    $(this).children(".col-sm-10").attr("class","present col-sm 10 description");
  } else if(hour < currentTime) {
    $(this).children(".col-sm-10").attr("class","past col-sm 10 description");
  } else {
    $(this).children(".col-sm-10").attr("class","future col-sm 10 description");
  }
});

/* Creates on click event that gets the inputted value in the timeblock and saves it in the local storage */
saveBtn.on('click', function (event){
  event.preventDefault();
  console.log($(this).siblings().eq(1).val());
   
  var text = $(this).siblings().eq(1).val();
  var parent = $(this).parent().attr('id');
  localStorage.setItem(parent, JSON.stringify(text)); 
})

/* Gets the inputted values from local storage and loads them to the screen so they persist through page refresh */
$('#9 textarea').val(localStorage.getItem('9'));
$('#10 textarea').val(localStorage.getItem('10'));
$('#11 textarea').val(localStorage.getItem('11'));
$('#12 textarea').val(localStorage.getItem('12'));
$('#13 textarea').val(localStorage.getItem('13'));
$('#14 textarea').val(localStorage.getItem('14'));
$('#15 textarea').val(localStorage.getItem('15'));
$('#16 textarea').val(localStorage.getItem('16'));
$('#17 textarea').val(localStorage.getItem('17'));
