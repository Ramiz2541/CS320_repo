function setFormMessage(formElement, type, message) {
    const message_element = formElement.querySelector(".form__message");

    message_element.textContent = message;
    message_element.classList.remove("form__message--success", "form__message--error");
    message_element.classList.add('form__message--${type}');
}

function Input_failure(input, message){
    input.classList.add("form__input--error");
    input.parentElement.querySelector(".form__input-error-message").textContent=message;
}

function reset_input(input){
    input.classList.remove("form__input--error");
    input.parentElement.querySelector(".form__input-error-message").textContent="";
}

document.addEventListener("DOMContentLoaded", () => {
    const Login_form = document.querySelector("#login");
    const account_creation_form = document.querySelector("#Account_creation");

    document.querySelector("linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        Login_form.classList.add("form--hidden");
        account_creation_form.classList.remove("form--hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        Login_form.classList.remove("form--hidden");
        account_creation_form.classList.add("form--hidden");
    });

    Login_form.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(Login_form, "error", "invalid credentials");
    });

    document.querySelectorAll(".form__input").forEach(input => {
    });
});