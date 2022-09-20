import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');

const formData = {};

formEl.addEventListener('input', throttle(onInput,500));

formEl.addEventListener('submit', onSubmit);

filledForm()

function onInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

function onSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset()
    localStorage.removeItem("feedback-form-state")
};

function filledForm() {
    const messegeE = JSON.parse(localStorage.getItem("feedback-form-state"));

    console.log(messegeE)
    if (messegeE) {

        formEl.firstElementChild.firstElementChild.value = messegeE.email;

        formEl.firstElementChild.nextElementSibling.firstElementChild.value = messegeE.message;
    }
};