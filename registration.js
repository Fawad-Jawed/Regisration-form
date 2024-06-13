let user = document.getElementById('username');
let email = document.getElementById('email');
let pass = document.getElementById('password');
let btn3 = document.getElementById('btn3');

btn3.addEventListener("click",()=>{
    localStorage.setItem("Username", user.value)
    localStorage.setItem("Email", email.value )
    localStorage.setItem("Password", pass.value)

    window.location.href = 'index.html'
    user.value= ""
    email.value= ""
    pass.value= ""
});

let wrapper = document.getElementById('wapp')
let close = document.getElementById('close')
close.addEventListener("click", () => {
    wrapper.style.visibility = "hidden";
    wrapper.style.transform= "scaleX(-20%)";
    wrapper.style.transition = ".8s"
});

let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
    window.location.href = 'index.html'
    wrapper.style.visibility = "visible";
    wrapper.style.transform= "translateX(-10%)";
    wrapper.style.transition = ".8s"
});