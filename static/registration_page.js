//----------TARGET DOM ELMENTS----------
const regBtn = document.querySelector('#reg-btn');
const fields = document.querySelectorAll('.field');
const confirmPassword = document.querySelector('#confirmPassword');
const password = document.querySelector('input[name=Password]');
const email = document.querySelector('input[name=Email]');
const userName = document.querySelector('input[name=userName]');
const visibility = document.querySelectorAll('.fa-eye-slash');
let message = document.querySelector('#message');


//----------MESSAGE DISPLAY----------
function display(content){
    message.style.display ='block';
    message.innerHTML = content;

    setTimeout(()=>{
        message.style.display = 'none';
    }, 3000);
}


//----------PASSWORD VISIBILITY----------
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


//----------FORM VALIDATION----------
form.addEventListener('submit', (e)=>{

    e.preventDefault();
    let isValid = false;

   Array.from(fields).forEach(field =>{

    if(confirmPassword.value != password.value){
        display('Confirmation password does not match password!');
        return;
    }

    isValid = true;

   });

   console.log(isValid)

   //----------MAKES REQUEST TO SERVER IN OTHER TO KNOW IF USER NAME AND EMAIL IS VALID----------
   if(isValid){
    fetch('/valUser', {
        headers: {'Content-Type': 'application/json'},
        method: 'post',
        body: JSON.stringify({Email: email.value, userName: userName.value})
    }).then(res => res.json()).then(data => {
        if(data['userExists']){
            display('Email already exists!');
            return;
        } 
        
        if(data['nameTaken']){
            display('This user name has been taken!');
            return;
        }

        form.submit();

    }).catch(err => {
        console.log(err);
    });
   }


});