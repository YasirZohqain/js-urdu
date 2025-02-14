# Project 1

## Background Color Change

### Project Code

##### [Live Project](https://dom-projects-play-area-javascript.stackblitz.io/1-colorChanger/index.html)

```javascript
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.id;
  });
});
```