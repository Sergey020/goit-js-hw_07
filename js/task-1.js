const categoriesList = document.querySelector(`#categories`);
console.log(categoriesList);
const arrayItems = document.querySelectorAll('.item');
console.log(`Количество категорий: ${arrayItems.length}`);
arrayItems.forEach(item => {
    console.log(item.firstElementChild.textContent);
    console.log(item.lastElementChild.children.length);
})