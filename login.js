let wrapper = document.getElementById("wapp");
let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
    wrapper.style.visibility = "visible";
    wrapper.style.transform= "translateX(-10%)";
    wrapper.style.transition = ".8s"
});

let close = document.getElementById('close')
close.addEventListener("click", () => {
    wrapper.style.visibility = "hidden";
    wrapper.style.transform= "scaleX(-20%)";
    wrapper.style.transition = ".8s"
});

let red = document.getElementById("red");
red.addEventListener("click", ()=>{
    window.location.href="registration.html"
});

let Email = document.getElementById('Email');
let Pass =document.getElementById('Pass');
let btn1 = document.getElementById('btn1')

let checkEmail = localStorage.getItem('Email');
let checkPass = localStorage.getItem('Password');
console.log(checkEmail);
console.log(checkPass);

btn1.addEventListener("click", ()=>{
    if(Email.value === checkEmail && Pass.value === checkPass){
        window.location.href="Dashboard.html"
        alert("sucessfull")
}
else{
    alert("Invalid Email or Password")
    }
})
