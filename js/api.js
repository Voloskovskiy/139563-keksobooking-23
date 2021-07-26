const getData = (onSuccess, onFail) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((object) => {
      onSuccess(object);
    })
    .catch(() => {
      onFail('При запросе на сервер произошла ошибка. Попробуйте ещё раз');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail('При запросе на сервер произошла ошибка. Попробуйте ещё раз');
    });
};

export {getData, sendData};
