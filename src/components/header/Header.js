import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/logo.png';
import Navigation from './Navigation';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () =>  {
        this.setState({
            scrolled: window.scrollY > 0
        })
    }
    render() {
        const { scrolled } = this.state;
        return (
            <nav className={scrolled === false ? "navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light" : "Header-fixed-custom dropbtn navbar navbar-expand-lg navbar-dard ftco-navbar ftco-navbar-light"} id="">
                <style>{`
                    .Header-fixed-custom {
                        position:fixed !important;
                        background-color: #212121 !important; 
                        z-index :9999;          
                    }
                    .dropbtn{
                        color: rgba(73,170,212,1) !important;
                    }`}
                </style>
                <div className="header">
                    <div className="h-content">
                        <Navigation/>
                        <div className="h-left col-6">
                            <NavLink to="/"><img alt="" src={logo} className="lzy1Td" role="img" aria-label="Site home" jsname="SwcDWb" /></NavLink>
                        </div>
                        <div className="h-right col-5">
                            <div className="dropdown ">
                                <div className="m-menu">
                                    <NavLink to="/">
                                        <span className="dropbtn">Home  <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </NavLink>
                                </div>
                                <div className="dropdown-content">
                                    <div className="dropdown-format">
                                        <NavLink to="/training-plan">Training Plan</NavLink>
                                        <NavLink to="/faq">FAQ</NavLink>
                                        <NavLink to="/new-question">New Question</NavLink>
                                        <NavLink to="/seminars">Seminars</NavLink>
                                        <NavLink to="/manage-question">Manage Questions</NavLink>
                                    </div>

                                </div>
                            </div>
                        </div>
   
                    </div>

                </div>
            </nav>

        );
    }
}
export default Header;