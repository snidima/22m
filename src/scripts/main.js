import React from 'react'


//React.render(
//    <h1>test</h1>,
//    document.getElementById('test')
//);

let obj = {
    el: 'qwe',
    arr: [
        {
            lol: 1,
            lol2: 2
        },
        {
            lol:5,
            lol2:80
        }
    ]
};

localStorage.setItem('qwe', JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem('qwe')));