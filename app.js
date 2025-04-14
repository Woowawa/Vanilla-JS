 const loginForm = document.querySelector("#login-form");
 const loginInput = loginForm.querySelector("input");
 const greeting = document.querySelector("#greeting"); 
 const logOut = document.querySelector("#logout");

 const HIDDEN_CLASSNAME = "hidden";
 const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    logOut.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add();
}

function removeGreetings(){
    logOut.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);

    loginInput.value ="";
}

function onLogOut(){
    removeGreetings();
    loginForm.addEventListener("submit", onLoginSubmit);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    //show the greetings.
    paintGreetings(savedUsername);
    logOut.addEventListener("click", onLogOut);
    
}