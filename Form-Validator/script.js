const form = document.getElementById('form')
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')


let isValid = false;
let passwordsMatch = false;

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }
    // DO somthing with user Data 
    console.log(user);
}

function validateForm(){
    isValid = form.checkValidity();
    // Style main message for an errors
    if(!isValid){
        message.textContent = 'Please fill out all fields.';
        message.style.color='red';
        messageContainer.style.borderColor ='red';
        return;
    }
    // Check if password match
    if(password1El.value === password2El.value){
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    }else{
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match';
        message.style.color='red';
        messageContainer.style.borderColor ='red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // if form is vaild and passwords mtach
    if(isValid && passwordsMatch){
        message.textContent = 'Successfully Registered!';
        message.style.color='green';
        messageContainer.style.borderColor ='green';
    }
}

function processFormData(e){
    e.preventDefault();
    // Validate Form
    validateForm();
    // Sumbit Data is valid
    if(isValid && passwordsMatch){
        storeFormData();
    }
}


//Event Listener 
form.addEventListener('submit', processFormData);