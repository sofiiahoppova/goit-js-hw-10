import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import iconSucsessUrl from '../img/bi_check2-circle.svg';
import iconErrorUrl from '../img/bi_x-octagon.svg'

const formElem = document.querySelector('.form');
formElem.elements.delay.setAttribute('step', 1000);

formElem.addEventListener('submit', (event) => {
    event.preventDefault();

    const delay = formElem.elements.delay.value;
    const state = formElem.elements.state.value;
    createPromise(delay, state)
        .then((delay) => {
            iziToast.show({
                title: 'Ok',
                message: `Fulfilled promise in ${delay}ms`,
                backgroundColor: '#59A10D',
                messageColor: 'white',
                iconUrl: iconSucsessUrl,
                position: 'topRight',
                theme: 'dark',
            })
        })
        .catch((delay) => {
            iziToast.show({
                title: 'Oops',
                message: ` Rejected promise in ${delay}ms`,
                backgroundColor: '#EF4040',
                messageColor: 'white',
                iconUrl: iconErrorUrl,
                position: 'topRight',
                theme: 'dark',
            })
    });

})


function createPromise(delay, status) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === 'fulfilled') {
            resolve(delay);
        } else {
            reject(delay);
        }
        }, delay)
        
    })
    return promise;
}