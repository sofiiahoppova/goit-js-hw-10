import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import imageUrl from '../img/bi_x-octagon.svg';

const inputElem = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
startButton.disabled = true;
let userSelectedDate;

const messageOptions = {
    title: 'Error',
    message: 'Please choose a date in the future!',
    messageColor: 'white',
    backgroundColor: '#EF4040',
    iconUrl: imageUrl,
    position: 'topRight',
    theme: 'dark',
}

const refs = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const initialTime = Date.now();
        const dateInMs = selectedDates[0].getTime();
        if ((dateInMs - initialTime) > 0) {
            startButton.disabled = false;
        } else {
            iziToast.error(messageOptions);
            startButton.disabled = true;
        }
        userSelectedDate = dateInMs;
  },
};

flatpickr(inputElem, options);

startButton.addEventListener('click', onStartButtonClick);

function onStartButtonClick(event) {
    startButton.disabled = true;
    inputElem.disabled = true;

    const initialTime = Date.now();
    const intervalId = setInterval(() => {
        const initialTime = Date.now();
        const {days, hours, minutes, seconds} = convertMs(userSelectedDate - initialTime);
        refs.days.textContent = addZero(days);
        refs.hours.textContent = addZero(hours);
        refs.minutes.textContent = addZero(minutes);
        refs.seconds.textContent = addZero(seconds);
    }, 1000)

    setTimeout(() => {
        clearInterval(intervalId);
        inputElem.disabled = false;
    }, userSelectedDate-initialTime)
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZero(value) {
    return value.toString().padStart(2, '0');
}
