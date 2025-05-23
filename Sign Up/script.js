const form=document.querySelector('.login-form form');
const accountID=document.querySelector('#accountid');
const firstname=document.querySelector('#fname');
const lastname=document.querySelector('#lname');
const email=document.querySelector('#email');
const pass=document.querySelector('#pass1');
const con_pass=document.querySelector('#pass2');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(!validateForm())
    {
        return;
    }
    alert('Form submitted successfully!');
    form.reset();
    accountID.value = '';
    firstname.value = '';
    lastname.value = '';
    email.value = '';
    pass.value = '';
    con_pass.value = '';
});
function validateForm(){
    if(accountID.value.trim() === ''){
        alert('Account ID is required!');
        return false;
    }
    if(firstname.value.trim() === ''){
        alert('First name is required!');
        return false;
    }           
    if(lastname.value.trim() === ''){
        alert('Last name is required!');
        return false;
    }
    if(email.value.trim() === ''){
        alert('Email address is required!');
        return false;
    }
    if(pass.value.trim() === ''){
        alert('New password is required!');
        return false;
    }
    if(con_pass.value.trim() === ''){
        alert('Confirm password is required!');
        return false;
    }
    if(pass.value !== con_pass.value){
        alert('Passwords do not match!');
        return false;
    }
    return true;
}
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}