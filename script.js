const toggle = document.getElementById('toggle');
const container = document.querySelector('.container');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.documentElement.style.setProperty('--primary-color', '#4caf50');
        document.documentElement.style.setProperty('--secondary-color', '#fff');
        document.documentElement.style.setProperty('--background-color', '#2b2b2b');
        document.documentElement.style.setProperty('--text-color', '#ddd');
        document.documentElement.style.setProperty('--toggle-checked-color', '#4caf50');
        document.documentElement.style.setProperty('--toggle-unchecked-color', '#444');
        container.style.borderColor = '#4caf50';
        
    } else {
        document.documentElement.style.setProperty('--primary-color', '#4caf50');
        document.documentElement.style.setProperty('--secondary-color', '#fff');
        document.documentElement.style.setProperty('--background-color', '#f5f5f5');
        document.documentElement.style.setProperty('--text-color', '#333');
        document.documentElement.style.setProperty('--toggle-checked-color', '#4caf50');
        document.documentElement.style.setProperty('--toggle-unchecked-color', '#bbb');
        container.style.borderColor = '#4caf50';
        
    }
});
/*
INPUTS
*/
let isValid = false;

const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYears = document.querySelector("#year");

/*
OUTPUT
*/

const errorsD = document.querySelector(".error-day");
const errorsM = document.querySelector(".error-month");
const errorsY = document.querySelector(".error-year");

/*
OUTPUT
*/

const outputDay = document.querySelector(".output-day");
const outputMonth = document.querySelector(".output-month");
const outputYears = document.querySelector(".output-year");

const Btn = document.querySelector(".submit-btn");

inputDay.addEventListener("input", (event) => {
  if (inputDay.value > 31 || inputDay.value < 1) {
    errorsD.textContent = "Invalid Date";
    isValid = false;
  } else {
    isValid = true;
    errorsD.textContent = "";
  }
});

inputMonth.addEventListener("input", (event) => {
  if (inputMonth.value > 12 || inputMonth.value < 1) {
    errorsM.textContent = "Not a Valid Month";
    isValid = false;
  } else {
    isValid = true;
    errorsM.textContent = "";
  }
});

inputYears.addEventListener("input", (event) => {
  if (inputYears.value > 2023 || inputYears.value < 1) {
    errorsY.textContent = "Invalid Year";
    isValid = false;
  } else {
    isValid = true;
    errorsY.textContent = "";
  }
});

/*
CALCULATOR
*/

function ageCalculator() {
  const currentDate = new Date();

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
  let currentYear = currentDate.getFullYear();

  const birthDay = parseInt(inputDay.value, 10);
  const birthMonth = parseInt(inputMonth.value, 10);
  const birthYear = parseInt(inputYears.value, 10);

  // Calculate days
  let days = currentDay - birthDay;
  if (days < 0) {
    const daysInPreviousMonth = new Date(
      currentYear,
      currentMonth - 1,
      0
    ).getDate();
    days += daysInPreviousMonth;
    currentMonth -= 1;
  }

  // Calculate months
  let months = currentMonth - birthMonth;
  if (months < 0) {
    months += 12;
    currentYear -= 1;
  }

  // Calculate years
  const years = currentYear - birthYear;

  console.log(`Years: ${years}, Months: ${months}, Days: ${days}`);

  outputDay.innerText = days;
  outputMonth.innerText = months;
  outputYears.innerText = years;

  inputDay.value = "";
  inputMonth.value = "";
  inputYears.value = "";
}

Btn.addEventListener("click", ageCalculator);
