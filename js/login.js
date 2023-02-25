let yourEmail="rumi@gmail.com"
let yourPassword="123456789"




let logingButton=document.getElementById('login_button')
logingButton.addEventListener('click',function(){

    let inputEmail = document.getElementById("exampleInputEmail1").value
    let inputPassword = document.getElementById("exampleInputPassword1").value


    if(inputEmail == yourEmail && inputPassword == yourPassword){
        window.location.href= "ckash.html"
    }
    else{
        alert('thik nai');
    }


})