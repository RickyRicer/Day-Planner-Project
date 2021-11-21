// Date planner

// Display current date at top of calendar
let currentDay = moment().format("dddd, MMMM Do YYYY");

$('#currentDay').text(currentDay);

// Current hour retrieval.
let currentHour = parseInt(moment().hour());
// 

// Below are timeblocks for standard business hours.
// Timeblocks must be color coded for past/present/future time slots
// Save events into timeblocks, must stay after pages refreshes

