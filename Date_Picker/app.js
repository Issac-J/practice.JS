//Getting Elements
const datePickerEl = document.getElementById("date-picker");
const dateInputEl = document.getElementById("date-input");
const calendarEl = document.getElementById("calendar");
const monthContentEl = document.getElementById("month");
const daysEl = document.getElementById("days");
const datesEl = document.getElementById("dates");

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

let calendarDate = { data: "", year: 0, month: 0, date: 0 };
let selectedDate = { data: "", year: 0, month: 0, date: 0 };

// Events
window.addEventListener("load", calculatTodayDate);
dateInputEl.addEventListener("click", onClickSelectDate);

// Functions
function calculatTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  calendarDate = {
    data: today,

    year: year,
    month: month,
    date: date,
  };

  // display date to DateInputEl
  dateInputEl.innerText = formatedDate(year, month, date);
}

function formatedDate(year, month, date) {
  let formatedYear = year;
  let formatedMonth = month;
  let formatedDate = date;

  if (formatedMonth < 10) formatedMonth = `0${formatedMonth}`;
  if (formatedDate < 10) formatedDate = `0${formatedDate}`;

  return `${formatedYear} / ${formatedMonth} / ${formatedDate}`;
}

function createDates() {
  const thisYear = new Date().getFullYear();
  const thisMonth = new Date().getMonth();

  // 현재는 5월이므로 thisMonth 는 4가 할당된다.
  // console.log(thisMonth);

  // Calculate number of dates :  해당 월의 일 수
  // thisMonth 는 4가 담겨 있지만, getDate()에서 +1 을 한 값을 입력해줘야 한다.
  const numberOfDates = new Date(thisYear, thisMonth + 1, 0).getDate();
  // console.log(numberOfDates);

  // dateEl를 담고 있는 Container 역할을 한다.
  const fragmentEl = new DocumentFragment();

  for (let i = 1; i <= numberOfDates; i++) {
    const dateEl = document.createElement("div");
    dateEl.classList.add("date");
    dateEl.innerText = i;
    dateEl.dataset.date = i;

    // Append dateEl to fragmentElement
    fragmentEl.appendChild(dateEl);
  }

  // 해당 월의 1일의 시작하는 요일에 맞춘다.
  fragmentEl.firstChild.style.gridColumnStart =
    new Date(thisYear, thisMonth, 1).getDay() + 1;

  // Append fragment to calendarDateEl
  datesEl.appendChild(fragmentEl);
}

function onClickSelectDate(event) {
  calendarEl.classList.remove("");
  const eventTarget = event.target;

  console.dir(eventTarget);
}

// Call Function
createDates();
