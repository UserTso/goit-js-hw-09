import Notiflix from 'notiflix';

const refs = {
inputDelay: document.querySelector('[name="delay"]'),
inputStep: document.querySelector('[name="step"]'),
inputAmount: document.querySelector('[name="amount"]'),
btn: document.querySelector('[type="submit"]'),
}


refs.btn.addEventListener('click',onClickPromise);


function onClickPromise(event) {
  event.preventDefault();
  const inputFirstDelay = Number(refs.inputDelay.value);
  const inputFirstStep = Number(refs.inputStep.value);
  const inputFirstAmount = Number(refs.inputAmount.value);

  for (i = 1, delay = inputFirstDelay; i <= inputFirstAmount; i += 1, delay += inputFirstStep) {
    createPromise(i, delay).then(({ position, delay }) => {
       Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
    }).catch(({ position, delay }) => {
       Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
    })
  }

  // console.log(inputFirstDelay);
}

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
  } else {
    reject({ position, delay });
  }
    }, delay)
  })
}
