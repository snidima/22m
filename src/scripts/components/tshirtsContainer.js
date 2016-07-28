/** @jsx React.DOM */
const React = require('react');
const Tshirt = require('./tshirt.js');

module.exports = React.createClass({

    render: function(){
        return(
            <div className="item-container">
                <Tshirt />
            </div>
        )
    }

});

