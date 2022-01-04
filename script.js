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
 

 if(localStorage.getItem('user')) {
     const user = JSON.parse(localStorage.getItem('user'));
     const sendData = (url, data) => {
     return fetch(url, {
         method: 'POST',
         body: data,
         headers: {
             'Content-type': 'application/json; charset=UTF-8'
         },

     })
     .then(res => res.json())
     .then(data => console.log(data))
     .catch(error => console.log(error));
    };
 sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(user));
 }
 
 
    

       


    

    
 