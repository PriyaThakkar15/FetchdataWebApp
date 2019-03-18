import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-dark">
                <a className="navbar-brand text-white" href="#">Navbar</a>
                <ul className="list-unstyled ">
                    <a href="#" ><li className="d-inline-block m-2 text-white">Home</li></a>
                    <a href="#" ><li className="d-inline-block m-2 text-white">User</li></a>
                </ul>
            </nav>)
    }
}

export default NavBar;