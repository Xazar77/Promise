 'use strict';

 const getData = () => {
     return fetch('db.json')
         .then(res => res.json())
         .then(data => {
             render(data);
         })
         .catch(error => console.log(error));
 };
 getData();



 const render = (data) => {
     localStorage.setItem('user', JSON.stringify(data));
 };





 if (localStorage.getItem('user')) {
     const user = JSON.parse(localStorage.getItem('user'));
     const sendData = (url, data) => {
          const request = new XMLHttpRequest();
          request.open('POST', url);
          request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
          request.send(data);

          request.onload = function () {
              alert(`Загружено: ${request.status} ${request.response}`);
          };

          request.onerror = function () { // происходит, только когда запрос совсем не получилось выполнить
              alert(`Ошибка соединения`);
          };

          request.onprogress = function (event) { // запускается периодически
              // event.loaded - количество загруженных байт
              // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
              // event.total - количество байт всего (только если lengthComputable равно true)
              alert(`Загружено ${event.loaded} из ${event.total}`);
          };

     };
     sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(user));
 }