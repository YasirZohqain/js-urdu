# Project 3

## Digital Clock

### Project Code

##### [Live Project](https://dom-projects-play-area-javascript.stackblitz.io/3-DigitalClock/index.html)

```javascript
const clock = document.getElementById('clock');

setInterval(() => {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString('en-IT');
}, 1000);
```