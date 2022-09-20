import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');

const formData = {};

formEl.addEventListener('input', onInput);

formEl.addEventListener('submit', onSubmit);

filledForm()

function onInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state",JSON.stringify(formData))

    console.log(formData)
};

function onSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset()
};

function filledForm() {
    const messege = localStorage.getItem(JSON.parse("feedback-form-state"));
    if (messege) {
        formEl.value = messege;

        console.log(formEl.value)
    }
}

