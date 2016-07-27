import React from 'react'
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'


let els = document.querySelectorAll('.t-shirt-item-footer__action-2');
let popup = document.querySelector('.popup-wrap');

els.forEach(function( el ){
    el.onclick = function(){
        popup.setAttribute('data-active', 'true');
        document.querySelector('body').style.overflow = 'hidden';
    }
});

document.querySelector('.popup__close').onclick = function(){
    popup.setAttribute('data-active', 'false');
    document.querySelector('body').style.overflow = 'scroll';
};