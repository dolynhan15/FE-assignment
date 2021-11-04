import React, { Component } from 'react';
import PageTitle from '../page-title/PageTitle';
import avatarQuestion from '../image/qa.png';
import avatarUser from '../image/user-icon.png';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../redux/action';
import { Spin } from 'antd';
class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrFaq: [
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 1",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 2",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 3",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 4",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 5",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 6",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 7",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 8",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 9",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 10",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 11",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 12",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 13",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
                {
                    "id": 1,
                    "author": {
                        "id": "001",
                        "name": "Admin 01",
                        "avatarUrl": "https://avaar.com/url/001.jpg"
                    },
                    "views": 1,
                    "questionText": "This is question number 14",
                    "answers": [
                        {
                            "id": 2,
                            "order": 2,
                            "answerText": "reply 02"
                        },
                        {
                            "id": 1,
                            "order": 1,
                            "answerText": "reply 02"
                        }
                    ]
                },
            ],
            comments: "",
            pageNumber: 1,
            totalPages: ""
        }
    }
    componentDidMount() {
        this.props.getFAQList();
    }
    dataPagination = (arr) => {
        var list = [];
        list = [...arr, ...this.props.faqs]
        return list;
    }
    handleTextChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleOnSubmit = (id) => {
        const { comments } = this.state;
        var data = {
            comments: comments,
            id: id
        }
        this.props.addComment(data);
        this.setState({
            comments: ""
        })
    }
    getList = (pageNumber) => {
        const { arrFaq } = this.state;
        const array = this.dataPagination(arrFaq);
        this.state.totalPages = Number.parseInt((array.length) / 2)
        const list = []
        for (let i = (2 * (pageNumber - 1)); i < (2 * pageNumber); i++) {
            if (array[i]) {
                list.push(array[i])
            }
        }
        return list;
    }
    prevPage = () => {
        if (this.state.pageNumber > 1) {
            this.setState({
                pageNumber: this.state.pageNumber - 1
            });
        }
    }
    nextPage = () => {
        if (this.state.pageNumber < this.state.totalPages) {
            this.setState({
                pageNumber: this.state.pageNumber + 1
            })
        }
    }
    setPage = (number) => {
        this.getList(number);
        this.setState({ pageNumber: number });
    }
    changePage = (e) => {
        if (e.key === "Enter" && e.target.value > 0 && e.target.value <= this.state.totalPages) {
            this.setState({ pageNumber: Number.parseInt(e.target.value) });
            console.log(e.target.value);
        }
    }
    render() {
        const { comments } = this.state;
        this.getList();
        return (
            <div className="">
                <PageTitle title="FAQ" />
                <div className="faq">
                    <div className="container">
                        <div className="btn-newques col-12">
                            <NavLink to="/new-question"><button>New Question</button></NavLink>
                        </div>
                        <div className="content">
                            {
                                this.props.loading ? <div className="example"><Spin /></div> :
                                    <div>
                                        {this.getList(this.state.pageNumber).map((value,key) => (
                                            <div className="content-faq" key={key}>
                                                <div className="c-question">
                                                    <div className="avatar col-1">
                                                        <img alt="avatar-question" src={avatarQuestion} />
                                                    </div>
                                                    <div className="question-text col-11">
                                                        <p className="text"><span>{value.questionText}</span></p>
                                                    </div>
                                                </div>
                                                <div className="c-answer">
                                                    <div className="list-answer col-9">
                                                        <ul>
                                                            {value.answers.map((val,key) => (
                                                                <li key={key}>{val.answerText}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className='avatar-answer col-3'>
                                                        <img alt="avartar-user" src={avatarUser} />
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    <div className='avatar-answer col-2'>
                                                        <img alt="avartar-user" src={avatarUser} />
                                                    </div>
                                                    <div className="c-input col-10" >
                                                        <input onChange={(e) => this.handleTextChange(e)} value={comments} className="col-md-5" placeholder="Type your comment here" />
                                                        <button className="" onClick={() => this.handleOnSubmit(value.id)} type="button">Submit</button>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                        ))}
                                    </div>
                            }
                            {this.state.totalPages > 0 && (<div className="pagination">
                                <ul>
                                    <li onClick={() => this.prevPage()}><i className="fa fa-angle-left" aria-hidden="true"></i></li>
                                    <li className={this.state.pageNumber === 1 ? "page-active" : ""} onClick={() => this.setPage(1)}>1</li>
                                    <li className={this.state.pageNumber === 2 ? "page-active" : ""} onClick={() => this.setPage(2)}>2</li>
                                    {this.state.pageNumber === 3 && <li className="page-active" onClick={() => this.setPage(3)}>3</li>}
                                    {(this.state.pageNumber > 3 && this.state.pageNumber < this.state.totalPages - 2) && (
                                        <><li>...</li>
                                            <li onClick={() => this.prevPage()}>{this.state.pageNumber - 1}</li>
                                            <li className="page-active" onClick={() => this.setPage(this.state.pageNumber)}>{this.state.pageNumber}</li>
                                            <li onClick={() => this.nextPage()}>{this.state.pageNumber + 1}</li>
                                        </>
                                    )}
                                    {
                                        this.state.totalPages > 6 && (<>
                                            <li>...</li>
                                            {this.state.pageNumber === this.state.totalPages - 2 && (<li className="page-active">{this.state.totalPages - 2}</li>)}
                                            <li className={this.state.pageNumber === this.state.totalPages - 1 ? "page-active" : ""} onClick={() => this.setPage(this.state.totalPages - 1)}>{this.state.totalPages - 1}</li>
                                            <li className={this.state.pageNumber === this.state.totalPages ? "page-active" : ""} onClick={() => this.setPage(this.state.totalPages)}>{this.state.totalPages}</li>
                                            <li onClick={() => this.nextPage()}><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                                        </>)
                                    }
                                    <li><input className="input-page" placeholder="page" type="number" onKeyPress={(event) => this.changePage(event)} /></li>
                                </ul>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        faqs: state.faqs,
        comments: state.comments,
        loading: state.loading
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getFAQList: () => {
            dispatch(actions.getDataFAQRequest())
        },
        addComment: (comments) => {
            dispatch(actions.addComment(comments))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FAQ);