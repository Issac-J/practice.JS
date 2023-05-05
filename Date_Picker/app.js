//Getting Elements
const datePickerEl = document.getElementById("date-picker");
const dateInputEl = document.getElementById("date-input");
const calendarEl = document.getElementById("calendar");
const monthContentEl = document.getElementById("month");
const calendarDatesEl = document.getElementById("dates");

// Variables
let monthDate = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let calendarDate = { data: "", date: 0, month: 0, year: 0 };
let selectedDate = { data: "", date: 0, month: 0, year: 0 };

// Functions
function initialCalendarDate() {
  const data = new Date();

  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const date = data.getDate();

  console.log(data);
  console.log(year, month, date);
}

function formatedDate(dateData) {}

calendarDatesEl.innerHTML = "123";
const numberOfDates = new Date(
  calendarDate.year,
  calendarDate.month + 1,
  0
).getDate();

function createDate() {}

// Call Function
initialCalendarDate();
