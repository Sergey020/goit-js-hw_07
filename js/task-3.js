const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
inputEl.addEventListener("input", event => {
    spanEl.textContent = event.currentTarget.value.trim();
if(event.currentTarget.value.trim() === "") {
    spanEl.textContent = 'Anonymous';
}
});