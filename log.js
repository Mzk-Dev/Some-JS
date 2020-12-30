let login , pass;
login = prompt('Enter your login');
if (login == 'admin'){
    pass = prompt('enter your password');
    if (pass == 'I am main'){
        alert('Hello');
    }
    else if (pass == '' || pass == null){
        alert(' canceled');
    }
    else{
        alert('Invalid password');
    }
}
else if (login == '' || login == null){
    alert('canceled');
}
else{
    alert('i dont know u')
}
