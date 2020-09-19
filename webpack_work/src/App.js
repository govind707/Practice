import React, { Componet } from 'react';
import Pizza from './containers/Pizza';
import Users from './containers/Users';
import { Link, Route } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent';

const asyncPizza = asyncComponent(() => {
    return import('./containers/Pizza.js');
});


class App extends Componet {
    render(){
        return(
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" component={} />
                </div>
            </div>
        );
    }
}

export default App;