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

  const numberOfDates = new Date(year, month, 0).getDate();

  // 날짜의 수를 담을 Container
  const framgment = new DocumentFragment();

  // console.log(framgment);
  for (let i = 0; i < numberOfDates; i++) {
    const dateEl = document.createElement("div");
    dateEl.classList.add("date");
    dateEl.innerText = i + 1;
    framgment.appendChild(dateEl);
  }

  calendarDatesEl.appendChild(framgment);

  // Formated Date
  console.log(selectedDate.data);
}

// Call Function
initialCalendarDate();
