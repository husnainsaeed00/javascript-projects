const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
//console.log(items);

let futureDate = new Date(2020, 4, 24, 11, 30, 0);
//console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minuts = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date futureDate.getDate();

const weekday = futureDate.getDay();

//console.log(month);

//giveaway.textContent = `give away ends on ${year} ${hours}:${minuts}am`;
