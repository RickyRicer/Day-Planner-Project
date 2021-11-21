// Date planner
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

// Display current date at top of calendar
let currentDay = moment().format("dddd, MMMM Do YYYY");

$('#currentDay').text(`Today's Date is: ${currentDay}`);


// Timeblocks must be color coded for past/present/future time slots
activityPainter();
// Below current date are timeblocks for standard business hours.
function activityPainter(){
    let thisHour = moment().hours();
    console.log(thisHour);
    let time = $('.time-block');
    time.each(function() {
        let hour = parseInt($(this).attr('id'));
        console.log(hour);
        if (hour < thisHour){
            console.log('past');
            $(this).addClass('past');
        } else if (hour === thisHour) {
            console.log('present');
            $(this).addClass('present');
            $(this).removeClass('past');
        } else {
            console.log('future');
            $(this).addClass('future');
            $(this).removeClass('present');
            $(this).removeClass('past');
        };
        
    });
};

// Save events into timeblocks, must stay after pages refreshes
$('#9 .description').val(localStorage.getItem('9'));
console.log('#9', localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));

// Click handler for saving events
$('.saveBtn').on('click', function(){
    let description = $(this).siblings('.description').val();
    let hour = $(this).parent().attr('id');
    localStorage.setItem(hour, description);
})


});