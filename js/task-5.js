function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const divEl = document.querySelector('.widget');
const bodyEl = divEl.parentNode;
function handleClick(event){
  console.log(getRandomHexColor());
  spanEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}
btnEl.addEventListener('click',handleClick);
