import React, {Component} from 'react';
import NavBar from '../include/navbar';
import Footer from '../include/footer';
import Home from '../pages/Home';

import '../App.css';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <main className="container-fluid p-5">
                <Home />


                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default App;
