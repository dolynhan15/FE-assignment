import React, { Component } from 'react';

class PageTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    render() {
        return (
            <section id="pagetitle" data-speed={8} datatype="background">
                <div className="page-title" style={{ backgroundImage: 'url(https://i.pinimg.com/originals/6a/c1/ba/6ac1ba3001f49073eb23c36a9e64e7e3.jpg)' }}>
                    <div className="title">
                        <h1 >
                            <span>{this.props.title}</span>
                        </h1>
                    </div>
                </div>
            </section>
        );
    }
}

export default PageTitle;