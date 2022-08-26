import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    inputForm: document.querySelector('#datetime-picker'),
    btn: document.querySelector('button[data-start]'),
    spanNumber: document.querySelector('.value'),
}

refs.inputForm.addEventListener('input', onInputDate);
refs.btn.addEventListener('click', onClickBtn);

let currentDate = Date.now();
let selectedDate = null;
console.log(currentDate);

 refs.btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0].getTime();
        if (selectedDate < currentDate) {
            alert("Please choose a date in the future");
       }
        refs.btn.disabled = false;
    console.log(selectedDates[0]);
  },
};
flatpickr(refs.inputForm, options);


function onClickBtn(event) {
    refs.btn.disabled = false;
    let timerId = setInterval(() => {
        let delta = selectedDate - currentDate;
        console.log(delta)
    }, 1000)
    
}




console.log(refs.inputForm);

function onInputDate(event) {

}

