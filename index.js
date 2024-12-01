function checkEmail(){
    let email = document.querySelector("#emailField").value;
    if(!email.includes("@")) alert('Невалилный email. Нет символа "@"');
    else if (!email.includes(".")) alert('Невалилный email. Нет символа "."');
    else alert(email);
}
