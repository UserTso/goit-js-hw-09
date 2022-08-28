import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    inputForm: document.querySelector('#datetime-picker'),
    btn: document.querySelector('button[data-start]'),
    spanNumber: document.querySelector('.value'),
    spanDays: document.querySelector('[data-days]'),
    spanHours: document.querySelector('[data-hours]'),
    spanMinutes: document.querySelector('[data-minutes]'),
    spanSeconds: document.querySelector('[data-seconds]'),
}

refs.btn.addEventListener('click', onClickBtn);

let selectedDate = null;
refs.btn.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0].getTime();
        if (selectedDate < Date.now()) {
            Notiflix.Notify.failure("Please choose a date in the future");
        } else {
            refs.btn.disabled = false;
        }
       
    console.log(selectedDates[0]);
  },
};
flatpickr(refs.inputForm, options);

const timer = {
  
    start() {
       
        const intervalId = setInterval(() => {
            const startTime = Date.now();
            const deltaTime = selectedDate - startTime;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            console.log(`${days}:${hours}:${minutes}:${seconds}`);


            updateSpanNumber({ days, hours, minutes, seconds });


            if (deltaTime < 1000) {
                clearInterval(intervalId);
               refs.btn.disabled = false;
            }

        }, 1000)
    },
};

function onClickBtn(event) {
    
   timer.start();
    refs.btn.disabled = true;
   
}

function updateSpanNumber({ days, hours, minutes, seconds }) {
    refs.spanDays.textContent = `${days}`;
    refs.spanHours.textContent = `${hours}`;
    refs.spanMinutes.textContent = `${minutes}`;
    refs.spanSeconds.textContent = `${seconds}`;
}


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}




// console.log(refs.inputForm);



