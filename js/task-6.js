function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
function createBoxes(amount){
if(amount >= 1 && amount <= 100) {
  let str = '';
  for (let i = 1; i <= amount; i++) {
    str += `<div></div>`;
  }
  boxesEl.innerHTML = `${str}`;
}
return boxesEl;
}
function handleClick() {
createBoxes(amount);
}
btnCreate.addEventListener('click', handleClick);
inputEl.addEventListener('input', event => amount = event.currentTarget.value);