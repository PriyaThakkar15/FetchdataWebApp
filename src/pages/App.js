import React, {Component} from 'react';
import Header from '../include/header.js';
import './App.css'
import Footer from "../include/footer";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default App;