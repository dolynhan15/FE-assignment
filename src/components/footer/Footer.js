import React, { Component } from 'react';
import healthcare from '../image/healthcare.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="content">
                    <div className="footer-left col-6">
                        <img alt="icon-hc" src={healthcare} />
                    </div>
                    <div className="col-6">
                        <p>© 2021 KMS Technology. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;