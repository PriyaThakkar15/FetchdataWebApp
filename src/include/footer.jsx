import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="card text-center bg-dark ">
                <div className="card-body">
                    <ul>
                        <a href="#">
                            <li className='text-white list-unstyled d-inline-block p-2'>
                                <i className="fa fa-facebook fa-2x"></i>
                            </li>
                        </a>
                        <a href="#">
                            <li className='text-white list-unstyled d-inline-block p-2'>
                                <i className="fa fa-whatsapp fa-2x"></i>
                            </li>
                        </a>
                        <a href="#">
                            <li className='text-white list-unstyled d-inline-block p-2'>
                                <i className="fa fa-twitter fa-2x"></i>
                            </li>
                        </a>
                        <a href="#">
                            <li className='text-white list-unstyled d-inline-block p-2'>
                                <i className="fa fa-instagram fa-2x"></i>
                            </li>
                        </a>

                    </ul>
                </div>

            </div>
        )
    }
}

export default Footer;