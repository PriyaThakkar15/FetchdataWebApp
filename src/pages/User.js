import React, {Component} from 'react';


class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }

    }

    componentDidMount() {
        fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then(data => this.setState({users: data}))
    }

    render() {
        return (
            <div className="container">
                <h5 className="pb-3">User Details</h5>
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
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.login}</td>
                                <td>{user.node_id}</td>
                                <td>{user.type}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>

        )

    }

}


export default User;



