/** @jsx React.DOM */
const React = require('react');
const Tshirt = require('./tshirt.js');

module.exports = React.createClass({

    componentDidMount: function(){
        this.getTshirts();
    },

    getTshirts: function(){
        var self = this;
        $.getJSON( "http://api.22m/products", function( data ) {
            self.setState({
                tshirts: data
            });

        });
    },

    getInitialState: function(){
        return({
            tshirts: false
        });
    },

    render: function(){

        var el = false;

       if ( this.state.tshirts )
            el = this.state.tshirts.map(function(tshirt, index) {
                return (
                    <div className="t-shirt-item-wrap">
                        <Tshirt tshirt={tshirt} key={index} />
                    </div>
                )
            });

        return (
            <div className="item-container">
                {el}
            </div>
        )

    }

});

