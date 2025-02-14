##Project 1

#Background Color Change

```
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.id;
  });
});
```