const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password= form.elements.password.value;
    if(email === "" || password === "") {
    alert('All form fields must be filled in!)')
    } else { 
    console.log({email: email, password: password});
    }
    form.reset();
}

