import React, { Component } from 'react';
import PageTitle from '../page-title/PageTitle';
import { connect } from 'react-redux';
import * as actions from '../../redux/action';
class NewQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            questions: ''
        }
    }
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    }
    handleSubmit = () => {
        const { name, email, questions } = this.state;
        var data = {
            name: name,
            email: email,
            questions: questions
        }
        this.props.addNewQuestion(data)
        console.log(data);
        this.setState({
            name: '',
            email: '',
            questions: ''
        })
    }
    render() {
        const { name, email, questions } = this.state
        return (
            <div>
                <PageTitle title="New Question" />
                <div className="new-question">
                    <div className="container">
                        <div className="form">
                            <h2>Submit Question</h2>
                            <form className="was-validated" method="post">
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" value={name} onChange={this.handleChange}required pattern="^\S+$" />
                                    <div className="valid-feedback">Valid.</div>
                                    <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} required />
                                    <div className="valid-feedback">Valid.</div>
                                    <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="question">Question Content:</label>
                                    <input type="text" className="form-control" id="question" placeholder="Question Content" name="questions" value={questions} onChange={(e) => this.handleChange(e)} required maxLength="200"/>
                                    <div className="valid-feedback">Valid.</div>
                                    <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="btn-submit">
                                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary ">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        addNewQuestion: (questions) => {
            dispatch(actions.addNewQuestion(questions))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);