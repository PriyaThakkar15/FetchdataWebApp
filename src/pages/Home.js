import React, {Component} from 'react';
import NavBar from "../include/navbar";
import Footer from "../include/footer";

class Home extends Component {

    constructor() {
        super();
        this.state = {
            users: [ ],
        }

    }

    componentDidMount()
    {
        fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then(data => this.setState({users: data}))
    }

    render()
    {
        return(
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Login</th>
                        <th>Type</th>
                        <th>Node_id</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.users.map(function (user) {
                        return <tr><td key={user.id}>{user.id}</td><td>{user.login}</td><td>{user.node_id}</td><td>{user.type}</td></tr>
                    })
                }
                </tbody>
            </table>

        )

    }

}


export default Home;



