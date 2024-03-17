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
  console.log(amount);
  let str = '';
  for (let i = 1; i <= amount; i++) {
    str += `<div></div>`;
  const divEl = document.createElement('div');
  //console.log(divEl);
  divEl.style.width = `${30 + i * 10}px`;
  divEl.style.height = `${30 + i * 10}px`;
  divEl.style.backgroundColor = getRandomHexColor();
  boxesEl.innerHTML = `${str}`;
  console.log(boxesEl);
  }
}
//console.log(boxesEl);


function handleClick() {
  //console.log(inputEl.value);
  const amount = Number(inputEl.value);
  if(amount >= 1 && amount <= 100) {
  createBoxes(amount);
}};
btnCreate.addEventListener('click', handleClick);

function destroyClick() {
  boxesEl.innerHTML = '';
  //console.log(boxesEl);
};
btnDestroy.addEventListener('click', destroyClick)