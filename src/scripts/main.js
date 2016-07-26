import React from 'react'
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'

//React.render(
//    <h1>test</h1>,
//    document.getElementById('test')
//);

const Home = React.createClass({
    render(){
        return(
            <h1>Home</h1>
        )
    }
});

const Tshirts = React.createClass({
    render(){
        return(
            <h1>Tshirts</h1>
        )
    }
});



React.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/tshirts" component={Tshirts} />
    </Router>,
    document.getElementById('page')
);