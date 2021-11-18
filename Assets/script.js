// Date planner

// Display current date at top of calendar
let currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

// Below are timeblocks for standard business hours.
// Timeblocks must be color coded for past/present/future
// Save events into timeblocks, must stay after pages refreshes

$('#currentDay').text(currentDay);

console.log(currentDay);