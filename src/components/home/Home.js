import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PageTitle from '../page-title/PageTitle';
import img from '../image/pixlr-bg-result.png';
import calendar from '../image/calendar.png';
import cleanCode from '../image/clean-code.png';
import googleDrive from '../image/hh_drive.png';
import gitlab from '../image/gitlab.png';
import slack from '../image/slack-logo.png';
class Home extends Component {
    render() {
        return (
            <div>
                <PageTitle title="HCDC Knowledge Base" />
                <div className="home">
                    <div className="container">
                        <section className="content-top">
                                <div className="left col-6">
                                    <div className="image">
                                        <img alt="" src={calendar} />
                                    </div>
                                    <div className="content">
                                        <div className="content-title">
                                            <span><NavLink to="/traning-plan">Fresher Training Plan</NavLink></span>
                                        </div>
                                        <div className="decription">
                                            <p>The recommended generic training plans designed by HCDC experts </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="right col-6">
                                    <div className="image">
                                        <img alt="" src={img} />
                                    </div>
                                    <div className="content">
                                        <div className="content-title">
                                            <span><NavLink to="/faq">FAQ</NavLink></span>
                                        </div>
                                        <div className="decription">
                                            <p>Get stuck? Let us know!</p>
                                        </div>
                                    </div>
                                </div>                
                        </section>
                        <section className="content-b col-12">
                            <div >
                                <span><NavLink to="/">Helpful Links</NavLink></span>
                            </div>
                        </section>
                        <section className="content-bottom">
                            <div className="col-3">
                                <div className="image">
                                    <img alt="" src={cleanCode} />
                                </div>
                                <div className="title">
                                    <a href="https://www.google.com/url?q=https%3A%2F%2Fintranet.kms-technology.com%2Fdisplay%2FCS%2FCoding%2BConventions&sa=D&sntz=1&usg=AFQjCNHaTy1wOrsukS4LCPXiIIPlT0O6WQ">KMS Coding Rules</a>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="image">
                                    <img alt="" src={googleDrive} />
                                </div>
                                <div className="title">
                                    <a href="https://drive.google.com/drive/folders/1775UF6nMPo_lXn-fFcdxSA_25M14Q6OS">HCDC Drive</a>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="image">
                                    <img alt="" src={gitlab} />
                                </div>
                                <div className="title">
                                    <a href="https://www.google.com/url?q=https%3A%2F%2Fgit.kms-technology.com&sa=D&sntz=1&usg=AFQjCNH_C6Mu7hwgF5IB2pXQn8-nAB9_ig">KMS Git</a>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="image">
                                    <img alt="" src={slack} />
                                </div>
                                <div className="title">
                                    <a href="https://kms-healthcare.slack.com/">HCDC Slack</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;