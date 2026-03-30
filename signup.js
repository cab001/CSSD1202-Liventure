let signupForm = document.getElementById("signupForm");

signupForm.addEventListener("click", function(e){
    e.preventDefault();
    console.log("Submited Signup Form!");
});

signupForm.addEventListener("submit", finishSignup);

function finishSignup() {
    window.alert("You are now signed up!");
    
    let signupPage = document.getElementById("signupPage");

    signupPage.style.display = "none";
}
