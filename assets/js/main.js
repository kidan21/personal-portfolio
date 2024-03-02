let btnMenu = document.getElementById('btn-menu');
let Menu = document.querySelector('.nav-links');
let btnSend = document.getElementById('btn-send');
btnSend.onclick = function(){
    sendEmail();
}

btnMenu.onclick = function(){
    btnMenu.classList.toggle('fa-times');
    Menu.classList.toggle('active')
}

let header = document.querySelector('header');

window.onscroll = function(){
    if(this.scrollY >= 100){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
    btnMenu.classList.remove('fa-times')
    Menu.classList.remove('active')
}

function sendEmail() {
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (first_name == "" || last_name == "" || phone == "" || email == "" || message == "") {
        alert("Please fill in all fields");
    }
    else {
        window.open('mailto: kidanejk@gmail.com' + '?subject=Contact Form&body=First Name: ' + first_name + '%0A' + 'Last Name: ' + last_name + '%0A' + 'Phone: ' + phone + '%0A' + 'Email: ' + email + '%0A' + 'Message: ' + message);

        document.getElementById('first_name').value = "";
        document.getElementById('last_name').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
    }

    return false;
}