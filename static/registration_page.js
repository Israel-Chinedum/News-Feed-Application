const regBtn = document.querySelector('#reg-btn');
const fields = document.querySelectorAll('.field');
const confirmPassword = document.querySelector('input[name=confirmPassword]');
const password = document.querySelector('input[name=Password]');
const email = document.querySelector('input[name=Email]');
const visibilit = document.querySelectorAll('.fa-eye-slash');
let message = document.querySelector('#message');


function display(content){
    message.style.display ='block';
    message.innerHTML = content;

    setTimeout(()=>{
        message.style.display = 'none';
    }, 3000);
}

Array.from(visibility).forEach(eye =>{
    eye.addEventListener('click', ()=>{
        eye.classList.toggle('fa-eye-slash');
        eye.classList.toggle('fa-eye');

        if(eye.classList.contains('fa-eye')){
            eye.parentElement.children[0].type = 'text';
        } else{
            eye.parentElement.children[0].type = 'password';
        }
    });
});


regBtn.addEventListener('click', ()=>{

   Array.from(fields).forEach(field =>{

    if(field.value == ''){
        display('Please completely fillout the form!');
        return;
    }

    if(email.value.includes('@') == false){
        display('Invalid Email Address!');
        return
    }

    if(confirmPassword.value != password.value){
        display('Confirmation password does not match password!');
    }

   });


});