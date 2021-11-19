// Date planner

// Display current date at top of calendar
let currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

$('#currentDay').text(currentDay);
// Below are timeblocks for standard business hours.
// Timeblocks must be color coded for past/present/future time slots
// Save events into timeblocks, must stay after pages refreshes

function currentTime() {
    let currentHour = moment().hours();
    let time = $('.time-block');

    time.each(function(){
        let hour = parseInt($(this).attr('id'))


    })
}
