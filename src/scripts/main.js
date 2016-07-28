/** @jsx React.DOM */
const React = require('react');
const tshirtsContainer = require('./components/tshirtsContainer.js');




React.render(
    <div className="item-container-wrap">
        <tshirtsContainer />
        <div className="item-more">
            <a href="#" className="btn btn__medium btn__color-2">Просомтреть другие футболки..</a>
            <a href="#" className="btn btn__medium btn__color-1">Создать свою футболку..</a>
        </div>
    </div>,
    document.getElementById('sthirtsContainer')
);