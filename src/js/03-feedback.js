import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');

const formData = {};

formEl.addEventListener('input', onInput);

formEl.addEventListener('submit', onSubmit);

function onInput(e) {
    formData[e.target.name] = e.target.value;

    console.log(formData)
};

function onSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset()
}

