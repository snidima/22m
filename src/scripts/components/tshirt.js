/** @jsx React.DOM */
const React = require('react');

module.exports = React.createClass({

    componentDidMount: function(){

    },

    getInitialState: function(){
        return {
            popup: false,
            originRate: this.props.tshirt.rate,
            tempRate: this.props.tshirt.rate
        };
    },

    handleRateHover: function(event){
        var rate = event.target.getAttribute('data-rate');
        this.setState({
            tempRate: rate
        });
    },

    handlerRateSet: function(){
        var rate = event.target.getAttribute('data-rate');
        this.setState({
            originRate: rate,
            tempRate: rate
        });
    },

    handlerRateLeave: function(){
        this.setState({
            tempRate: this.state.originRate
        });
    },

    popupOpen: function(){
      this.setState({
          popup: true
      });
    },

    popupClose: function(){
        this.setState({
            popup: false
        });
    },


    render: function(){

        var itemImageSmall = {
            backgroundImage: 'url('+this.props.tshirt.images.small+')'
        };

        var itemImageBig = {
            backgroundImage: 'url('+this.props.tshirt.images.big+')'
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
            <div>
                <div data-sex={sex} className="t-shirt-item">
                    <div className="t-shirt-item__header">
                        <div className="t-shirt-header__text">
                            <div className="t-shirt-header-text__big">{this.props.tshirt.name}</div>
                            <div className="t-shirt-header-text__small">«{this.props.tshirt.description}»</div>
                        </div>
                        <div className="t-shirt-header__fav"><svg viewBox="21 -12.6 44.4 39.9"><path stroke-miterlimit="10" d="M56.6-4.3c-3.5-3.5-9.3-3.5-12.8,0l-0.5,0.5 	l-0.6-0.5c-3.5-3.5-9.4-3.5-12.9,0c-3.5,3.5-3.5,9.3,0.1,12.8l12,11.9c0.4,0.4,0.9,0.8,1.5,1.1c0.5-0.3,0.9-0.7,1.4-1.1L56.6,8.4 	C60.1,4.9,60.1-0.8,56.6-4.3z"></path></svg></div>
                    </div>
                    <div className="t-shirt-item__content">
                        <div className="t-shirt-item-content-images" onClick={this.popupOpen}>
                            <div className="t-shirt-item-content-images__image" style={itemImageSmall} data-active="true"></div>
                        </div>
                        <div className="t-shirt-item-content-bottom-wrap">
                            <div className="t-shirt-item-content-tags">
                                {this.props.tshirt.tags.map(function(tag) {
                                    return <a href="#" className="t-shirt-item-content__tag">#{tag}</a>;
                                })}
                            </div>
                            <div className="t-shirt-item-content__stats">
                                <div data-rate={this.state.tempRate} className="t-shirt-item-content-stats__rate">
                                    <div onClick={this.handlerRateSet} onMouseEnter={this.handleRateHover} onMouseLeave={this.handlerRateLeave} className="t-shirt-item-content-stats-rate__star"><svg data-rate="1" viewBox="7.6 0 16.7 15.9"><path d="M13.4,5.2c0,0-3.2,0.4-5.3,0.6c-0.2,0-0.4,0.1-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5c1.6,1.4,3.9,3.6,3.9,3.6c0,0-0.6,3.1-1.1,5.2 	c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0c1.8-1,4.6-2.6,4.6-2.6s2.8,1.6,4.6,2.6c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5 	c-0.4-2.1-1.1-5.2-1.1-5.2s2.4-2.1,3.9-3.6c0.1-0.1,0.2-0.3,0.1-0.5s-0.2-0.3-0.4-0.3c-2.1-0.2-5.3-0.6-5.3-0.6s-1.3-2.9-2.2-4.8 	C16.4,0.2,16.2,0,16,0s-0.4,0.1-0.5,0.3C14.7,2.3,13.4,5.2,13.4,5.2z"></path></svg></div>
                                    <div onClick={this.handlerRateSet} onMouseEnter={this.handleRateHover} onMouseLeave={this.handlerRateLeave} className="t-shirt-item-content-stats-rate__star"><svg data-rate="2" viewBox="7.6 0 16.7 15.9"><path d="M13.4,5.2c0,0-3.2,0.4-5.3,0.6c-0.2,0-0.4,0.1-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5c1.6,1.4,3.9,3.6,3.9,3.6c0,0-0.6,3.1-1.1,5.2 	c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0c1.8-1,4.6-2.6,4.6-2.6s2.8,1.6,4.6,2.6c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5 	c-0.4-2.1-1.1-5.2-1.1-5.2s2.4-2.1,3.9-3.6c0.1-0.1,0.2-0.3,0.1-0.5s-0.2-0.3-0.4-0.3c-2.1-0.2-5.3-0.6-5.3-0.6s-1.3-2.9-2.2-4.8 	C16.4,0.2,16.2,0,16,0s-0.4,0.1-0.5,0.3C14.7,2.3,13.4,5.2,13.4,5.2z"></path></svg></div>
                                    <div onClick={this.handlerRateSet} onMouseEnter={this.handleRateHover} onMouseLeave={this.handlerRateLeave} className="t-shirt-item-content-stats-rate__star"><svg data-rate="3" viewBox="7.6 0 16.7 15.9"><path d="M13.4,5.2c0,0-3.2,0.4-5.3,0.6c-0.2,0-0.4,0.1-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5c1.6,1.4,3.9,3.6,3.9,3.6c0,0-0.6,3.1-1.1,5.2 	c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0c1.8-1,4.6-2.6,4.6-2.6s2.8,1.6,4.6,2.6c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5 	c-0.4-2.1-1.1-5.2-1.1-5.2s2.4-2.1,3.9-3.6c0.1-0.1,0.2-0.3,0.1-0.5s-0.2-0.3-0.4-0.3c-2.1-0.2-5.3-0.6-5.3-0.6s-1.3-2.9-2.2-4.8 	C16.4,0.2,16.2,0,16,0s-0.4,0.1-0.5,0.3C14.7,2.3,13.4,5.2,13.4,5.2z"></path></svg></div>
                                    <div onClick={this.handlerRateSet} onMouseEnter={this.handleRateHover} onMouseLeave={this.handlerRateLeave} className="t-shirt-item-content-stats-rate__star"><svg data-rate="4" viewBox="7.6 0 16.7 15.9"><path d="M13.4,5.2c0,0-3.2,0.4-5.3,0.6c-0.2,0-0.4,0.1-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5c1.6,1.4,3.9,3.6,3.9,3.6c0,0-0.6,3.1-1.1,5.2 	c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0c1.8-1,4.6-2.6,4.6-2.6s2.8,1.6,4.6,2.6c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5 	c-0.4-2.1-1.1-5.2-1.1-5.2s2.4-2.1,3.9-3.6c0.1-0.1,0.2-0.3,0.1-0.5s-0.2-0.3-0.4-0.3c-2.1-0.2-5.3-0.6-5.3-0.6s-1.3-2.9-2.2-4.8 	C16.4,0.2,16.2,0,16,0s-0.4,0.1-0.5,0.3C14.7,2.3,13.4,5.2,13.4,5.2z"></path></svg></div>
                                    <div onClick={this.handlerRateSet} onMouseEnter={this.handleRateHover} onMouseLeave={this.handlerRateLeave} className="t-shirt-item-content-stats-rate__star"><svg data-rate="5" viewBox="7.6 0 16.7 15.9"><path d="M13.4,5.2c0,0-3.2,0.4-5.3,0.6c-0.2,0-0.4,0.1-0.4,0.3c-0.1,0.2,0,0.4,0.1,0.5c1.6,1.4,3.9,3.6,3.9,3.6c0,0-0.6,3.1-1.1,5.2 	c0,0.2,0,0.4,0.2,0.5c0.2,0.1,0.4,0.1,0.5,0c1.8-1,4.6-2.6,4.6-2.6s2.8,1.6,4.6,2.6c0.2,0.1,0.4,0.1,0.5,0c0.2-0.1,0.2-0.3,0.2-0.5 	c-0.4-2.1-1.1-5.2-1.1-5.2s2.4-2.1,3.9-3.6c0.1-0.1,0.2-0.3,0.1-0.5s-0.2-0.3-0.4-0.3c-2.1-0.2-5.3-0.6-5.3-0.6s-1.3-2.9-2.2-4.8 	C16.4,0.2,16.2,0,16,0s-0.4,0.1-0.5,0.3C14.7,2.3,13.4,5.2,13.4,5.2z"></path></svg></div>
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
                            <div className="t-shirt-item-footer-action-1__text">Добавить в корзину</div>
                            <div className="t-shirt-item-footer-action-1__price"></div>
                        </div>
                        <div className="t-shirt-item-footer__action-2">{this.props.tshirt.price}р</div>
                    </div>
                </div>

                <div data-active={this.state.popup} className="popup-wrap">
                    <div className="popup">
                        <div className="popup__close" onClick={this.popupClose}></div>
                        <div className="popup__image" style={itemImageBig}>
                            <div className="popup-image-control">
                                <div data-active="true" className="popup-image-control__item"></div>
                                <div className="popup-image-control__item"></div>
                            </div>
                        </div>
                        <div className="popup__setting">
                            <div className="popup-setting-block">
                                <div className="popup-setting-block__big-text">Футболка мужская:</div>
                                <div className="popup-setting-block__small-text">«Очень крутое название очень крутой футболки»</div>
                            </div>
                            <div className="popup-setting-block">
                                <div className="popup-setting-block__big-text">Размер:</div><a href="#" className="popup-setting-block__link main-link main-link__small">Таблица размеров</a>
                                <div className="popup-setting-block__sizes">
                                    <div className="popup-setting-block-size">XS</div>
                                    <div data-active="true" className="popup-setting-block-size">S</div>
                                    <div className="popup-setting-block-size">M</div>
                                    <div className="popup-setting-block-size">L</div>
                                    <div className="popup-setting-block-size">XL</div>
                                    <div className="popup-setting-block-size">XXL</div>
                                    <div className="popup-setting-block-size">XXXL</div>
                                </div>
                            </div>
                            <div className="popup-setting-block">
                                <div className="popup-setting-block__big-text">Качество ткани:</div><a href="#" className="popup-setting-block__link main-link main-link__small">Разница в качестве</a>
                                <div className="popup-setting-block__qalitys">
                                    <div className="popup-setting-block-qality">Промо</div>
                                    <div data-active="true" className="popup-setting-block-qality">Хрошее</div>
                                    <div className="popup-setting-block-qality">Отличное</div>
                                </div>
                            </div>
                            <div className="popup-setting-block">
                                <div className="popup-setting-block__big-text">Количество:</div>
                                <div className="popup-setting-block__form">
                                    <div className="popup-setting-block-form__control">-</div>
                                    <input value="1" className="popup-setting-block-form__input" />
                                        <div className="popup-setting-block-form__control">+</div>
                                    </div>
                                </div>
                                <div className="popup-setting-block">
                                    <div className="popup-setting-block-btn-group">
                                        <div className="popup-setting-block-btn-wrap">
                                            <div className="popup-setting-block-btn__main">Добавить в корзину</div>
                                            <div className="popup-setting-block-btn__text">750р.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }

});

