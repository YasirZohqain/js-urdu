# Project 2

## Body Mess Index

### Project Code

[Live Project](https://dom-projects-play-area-javascript.stackblitz.io/2-BMICalculator/index.html)

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = document.querySelector('#height').value;
  const feetToCM = +height * 30.48;
  const weight = document.querySelector('#weight').value;
  const bmi = (weight / ((feetToCM * feetToCM) / 10000)).toFixed(2);

  const results = document.querySelector('#results');

  if (bmi <= 18.5) {
    results.textContent = `your weight is ${bmi}, so you are under weight`;
  } else if (bmi >= 18.51 && bmi <= 24.99) {
    results.textContent = `your weight is ${bmi}, so you are Normal weight`;
  } else if (bmi >= 25.0 && bmi <= 29.99) {
    results.textContent = `your weight is ${bmi}, so you are Over weight`;
  } else if (bmi >= 30.0 && bmi <= 34.99) {
    results.textContent = `your weight is ${bmi}, so you are Obese weight`;
  } else if (bmi >= 35.0) {
    results.textContent = `your weight is ${bmi}, so you are Extra Obese weight`;
  } else {
    results.textContent = `Please Enter Number not ${bmi}`;
  }
});

```