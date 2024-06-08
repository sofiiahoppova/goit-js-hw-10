import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const formElem = document.querySelector('.form');
formElem.elements.delay.setAttribute('step', 1000);

formElem.addEventListener('submit', (event) => {
    event.preventDefault();

    const delay = formElem.elements.delay.value;
    const state = formElem.elements.state.value;
    createPromise(delay, state)
        .then((delay) => {
            iziToast.show({
                message: `✅ Fulfilled promise in ${delay}ms`,
            })
        })
        .catch((delay) => {
            iziToast.show({
                message: `❌ Rejected promise in ${delay}ms`
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