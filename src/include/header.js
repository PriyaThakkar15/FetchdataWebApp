import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from '../pages/Home.js';
import User from '../pages/User.js';


class Header extends Component {
    render() {
        return (
            <Router>
                <div>

                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link text-white"> Home </Link></li>
                            <li><Link to={'/user'} className="nav-link text-white">User</Link></li>
                        </ul>
                    </nav>
                    <hr/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/user' component={User}/>

                    </Switch>
                </div>

            </Router>



        );
    }
}

export default Header;

