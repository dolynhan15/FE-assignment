import React, { Component } from 'react';
import PageTitle from '../page-title/PageTitle';
import { Table, Button, Popconfirm, Modal } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/action';
const { Column, } = Table;

class ManageQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            question: ''
        }
    }
    
    componentDidMount() {
        this.props.getDataQuestion()
    }
    handleDelete = (id) => {
        console.log(id);
        this.props.deleteQuestion(id);
    }
    handleEdit = (data) => {
        this.props.setQuestion(data);
        this.setState({
            name: data.author.name,
            question: data.questionText
        })
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    save = () => {
        let data = this.props.tempQuestion;
        data.author.name = this.state.name;
        data.questionText = this.state.question;
        this.props.editQuestion(data);
    }
    handleCancel = () => {
        this.props.setQuestion(null)
    }

    render() {
        console.log(this.props.manageQuestion);
        return (
            <div>
                <PageTitle title="Manage Questions" />
                <div className="manager-question">
                    <div className="container">
                        <div className="table">
                            <Modal className="modal-edit" title="Edit Row" visible={Boolean(this.props.tempQuestion)} onOk={this.save} onCancel={this.handleCancel}>
                                <label style={{ margin: "10px" }}>Name: </label>
                                <input name="name" value={this.state.name} onChange={(e) => this.onChange(e)} />
                                <label style={{ margin: "10px" }}>Question: </label>
                                <input name="question" value={this.state.question} onChange={(e) => this.onChange(e)} />
                            </Modal>
                            <Table dataSource={this.props.manageQuestion} pagination={false}>
                                <Column title="Id" dataIndex="id" key="id" sorter={(record1, record2) => { return record1.id > record2.id }} />
                                <Column title="Name" dataIndex="author" key="author.name"
                                    filters={[
                                        {
                                            text: 'Admin 01',
                                            value: 'Admin 01',
                                        },
                                        {
                                            text: 'Admin 05',
                                            value: 'Admin 05',
                                        },
                                    ]}
                                    render={(author) => author.name}
                                    onFilter={(value, record) => record.author.name.indexOf(value) === 0} />
                                <Column title="Question" dataIndex="questionText" key="questionText" />
                                <Column title="Action" key="id"
                                    render={(_, record, key) =>
                                        this.props.manageQuestion.length >= 1 ? (
                                            <div key={key}>
                                                <Button className="btn-edit" onClick={() => this.handleEdit(record)}>Edit</Button>
                                                <Popconfirm className="btn-delete" title="Sure to delete?" onConfirm={() => this.handleDelete(record.id)}>
                                                    <Button>Delete</Button>
                                                </Popconfirm>
                                            </div>

                                        ) : null}
                                />
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        manageQuestion: state.manageQuestion,
        tempQuestion: state.tempQuestion,
        loading: state.loading
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getDataQuestion: () => {
            dispatch(actions.getDataQuestionRequest())
        },
        deleteQuestion: (id) => {
            dispatch(actions.deleteQuestion(id))
        },
        setQuestion: (data) => {
            dispatch(actions.setQuestion(data))
        },
        editQuestion: (data) => {
            dispatch(actions.editQuestion(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageQuestion);