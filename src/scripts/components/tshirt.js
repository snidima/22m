/** @jsx React.DOM */
const React = require('react');

module.exports = React.createClass({

    componentDidMount: function(){

    },

    getInitialState: function(){
        return {};
    },

    handleRateHover: function(event){
        console.log(event);
    },



    render: function(){

        var itemImage = {
            backgroundImage: 'url('+this.props.tshirt.images.small+')'
        };

        var sex = 'male';

        switch (this.props.tshirt.sex) {
            case 1:
                sex = 'male';
                break;
            case 2:
                sex = 'female';
                break;
            case 3:
                sex = 'unisex';
                break;
            case 4:
                sex = 'kids';
                break;
            default:
                sex = 'male';
        }


        return(

            <div data-sex={sex} className="t-shirt-item">
                <div className="t-shirt-item__header">
                    <div className="t-shirt-header__text">
                        <div className="t-shirt-header-text__big">{this.props.tshirt.name}</div>
                        <div className="t-shirt-header-text__small">«{this.props.tshirt.description}»</div>
                    </div>
                    <div className="t-shirt-header__fav"><svg viewBox="21 -12.6 44.4 39.9"><path stroke-miterlimit="10" d="M56.6-4.3c-3.5-3.5-9.3-3.5-12.8,0l-0.5,0.5 	l-0.6-0.5c-3.5-3.5-9.4-3.5-12.9,0c-3.5,3.5-3.5,9.3,0.1,12.8l12,11.9c0.4,0.4,0.9,0.8,1.5,1.1c0.5-0.3,0.9-0.7,1.4-1.1L56.6,8.4 	C60.1,4.9,60.1-0.8,56.6-4.3z"></path></svg></div>
                </div>
                <div style={itemImage} className="t-shirt-item__content">
                    <div className="t-shirt-item-content__back-size"><svg viewBox="4.9 -1 22.1 16"><path d="M14.5,10.2c0,0,12.3,0.1,12.5-11.2C20.8,9.3,14.5,5.8,14.5,5.8l0-4.8L4.9,8l9.6,7V10.2z"></path></svg></div>
                    <div className="t-shirt-item-content-bottom-wrap">
                        <div className="t-shirt-item-content-tags">
                            {this.props.tshirt.tags.map(function(tag) {
                                return <div className="t-shirt-item-content__tag">#{tag}</div>;
                            })}
                        </div>
                        <div className="t-shirt-item-content__stats">
                            <div data-rate={this.props.tshirt.rate} className="t-shirt-item-content-stats__rate">
                                <div onMouseEnter={this.handleRateHover} className="t-shirt-item-content-stats-rate__star"><svg viewBox="7.6 0 16.7 15.9"><path d="M13.4,5.2c0,0-3.2,0.4-5.3,0.6c-0.2,0-0.4,0.1-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5c1.6,1.4,3.9,3.6,3.9,3.6c0,0-0.6,3.1-1.1,5.2 	c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0c1.8-1,4.6-2.6,4.6-2.6s2.8,1.6,4.6,2.6c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5 	c-0.4-2.1-1.1-5.2-1.1-5.2s2.4-2.1,3.9-3.6c0.1-0.1,0.2-0.3,0.1-0.5s-0.2-0.3-0.4-0.3c-2.1-0.2-5.3-0.6-5.3-0.6s-1.3-2.9-2.2-4.8 	C16.4,0.2,16.2,0,16,0s-0.4,0.1-0.5,0.3C14.7,2.3,13.4,5.2,13.4,5.2z"></path></svg></div>
                                <div onMouseEnter={this.handleRateHover} className="t-shirt-item-content-stats-rate__star"><svg viewBox="7.6 0 16.7 15.9"><path d="M13.4,5.2c0,0-3.2,0.4-5.3,0.6c-0.2,0-0.4,0.1-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5c1.6,1.4,3.9,3.6,3.9,3.6c0,0-0.6,3.1-1.1,5.2 	c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0c1.8-1,4.6-2.6,4.6-2.6s2.8,1.6,4.6,2.6c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5 	c-0.4-2.1-1.1-5.2-1.1-5.2s2.4-2.1,3.9-3.6c0.1-0.1,0.2-0.3,0.1-0.5s-0.2-0.3-0.4-0.3c-2.1-0.2-5.3-0.6-5.3-0.6s-1.3-2.9-2.2-4.8 	C16.4,0.2,16.2,0,16,0s-0.4,0.1-0.5,0.3C14.7,2.3,13.4,5.2,13.4,5.2z"></path></svg></div>
                                <div onMouseEnter={this.handleRateHover} className="t-shirt-item-content-stats-rate__star"><svg viewBox="7.6 0 16.7 15.9"><path d="M13.4,5.2c0,0-3.2,0.4-5.3,0.6c-0.2,0-0.4,0.1-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5c1.6,1.4,3.9,3.6,3.9,3.6c0,0-0.6,3.1-1.1,5.2 	c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0c1.8-1,4.6-2.6,4.6-2.6s2.8,1.6,4.6,2.6c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5 	c-0.4-2.1-1.1-5.2-1.1-5.2s2.4-2.1,3.9-3.6c0.1-0.1,0.2-0.3,0.1-0.5s-0.2-0.3-0.4-0.3c-2.1-0.2-5.3-0.6-5.3-0.6s-1.3-2.9-2.2-4.8 	C16.4,0.2,16.2,0,16,0s-0.4,0.1-0.5,0.3C14.7,2.3,13.4,5.2,13.4,5.2z"></path></svg></div>
                                <div onMouseEnter={this.handleRateHover} className="t-shirt-item-content-stats-rate__star"><svg viewBox="7.6 0 16.7 15.9"><path d="M13.4,5.2c0,0-3.2,0.4-5.3,0.6c-0.2,0-0.4,0.1-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5c1.6,1.4,3.9,3.6,3.9,3.6c0,0-0.6,3.1-1.1,5.2 	c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0c1.8-1,4.6-2.6,4.6-2.6s2.8,1.6,4.6,2.6c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5 	c-0.4-2.1-1.1-5.2-1.1-5.2s2.4-2.1,3.9-3.6c0.1-0.1,0.2-0.3,0.1-0.5s-0.2-0.3-0.4-0.3c-2.1-0.2-5.3-0.6-5.3-0.6s-1.3-2.9-2.2-4.8 	C16.4,0.2,16.2,0,16,0s-0.4,0.1-0.5,0.3C14.7,2.3,13.4,5.2,13.4,5.2z"></path></svg></div>
                                <div onMouseEnter={this.handleRateHover} className="t-shirt-item-content-stats-rate__star"><svg viewBox="7.6 0 16.7 15.9"><path d="M13.4,5.2c0,0-3.2,0.4-5.3,0.6c-0.2,0-0.4,0.1-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5c1.6,1.4,3.9,3.6,3.9,3.6c0,0-0.6,3.1-1.1,5.2 	c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0c1.8-1,4.6-2.6,4.6-2.6s2.8,1.6,4.6,2.6c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5 	c-0.4-2.1-1.1-5.2-1.1-5.2s2.4-2.1,3.9-3.6c0.1-0.1,0.2-0.3,0.1-0.5s-0.2-0.3-0.4-0.3c-2.1-0.2-5.3-0.6-5.3-0.6s-1.3-2.9-2.2-4.8 	C16.4,0.2,16.2,0,16,0s-0.4,0.1-0.5,0.3C14.7,2.3,13.4,5.2,13.4,5.2z"></path></svg></div>
                            </div>
                            <div className="t-shirt-item-content-stats__views">
                                <div className="t-shirt-item-content-stats-views__icon"><svg viewBox="280 -120 448 256"><path d="M504-120c-81.9,0-145.7,48.8-224,128c67.4,67.7,124,128,224,128c99.9,0,173.4-76.4,224-126.6 	C676.2-49.4,602.8-120,504-120z M504,99.3c-49.4,0-89.6-41-89.6-91.3c0-50.4,40.2-91.3,89.6-91.3s89.6,41,89.6,91.3 	C593.6,58.4,553.4,99.3,504,99.3z M504-24c0-7.9,2.9-15.1,7.6-20.7c-2.5-0.4-5-0.6-7.6-0.6c-28.8,0-52.3,23.9-52.3,53.3 	s23.5,53.3,52.3,53.3S556.3,37.4,556.3,8c0-2.3-0.2-4.6-0.4-6.9C550.4,5.4,543.6,8,536.1,8C518.3,8,504-6.3,504-24z"></path></svg></div>
                                <div className="t-shirt-item-content-stats-views__text">{this.props.tshirt.views}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="t-shirt-item__footer">
                    <div data-active="true" className="t-shirt-item-footer__action-1">
                        <div className="t-shirt-item-footer-action-1__text">+ В корзину</div>
                        <div className="t-shirt-item-footer-action-1__price">( {this.props.tshirt.price}р. )</div>
                    </div>
                    <div className="t-shirt-item-footer__action-2" onClick={this.openPopup}>Подробнее..</div>
                </div>
            </div>

        )
    }

});

