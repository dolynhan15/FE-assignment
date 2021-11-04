import React, { Component } from 'react';
import PageTitle from '../page-title/PageTitle';
import software from '../image/software.png';
import { connect } from 'react-redux';
import * as actions from '../../redux/action';
import { Spin } from 'antd';
class Seminar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
            pageNumber: 1,
            totalPages: 7,
        }
    }
    componentDidMount() {
        this.props.getDataSeminar();
    }
    getList = (array) => {
        var list = []
        for (let i = (10 * (this.state.pageNumber - 1)); i < (10 * this.state.pageNumber); i++) {
            if (array[i]) {
                list.push(array[i])
            }
        }
        return list;
    }
    prevPage = () => {
        if (this.state.pageNumber > 1) {
            this.setState({
                num: this.state.num - 1,
                pageNumber: this.state.num - 1
            });
        }
        console.log(this.state.pageNumber);
    }
    nextPage = () => {
        if (this.state.pageNumber < this.state.totalPages) {
            this.setState({
                num: this.state.num + 1,
                pageNumber: this.state.num + 1
            })
        }
    }
    changePage = (e) => {
        var valueIn = e.target.value;
        if ( valueIn !== '' && e.key === "Enter" && valueIn > 0 && valueIn <= this.state.totalPages) {
            this.setState({ 
                pageNumber: Number.parseInt(valueIn),
            });
        } else if(valueIn === '' && e.key === "Enter"){
            this.setState({ 
                pageNumber: 1,
            });
        }
    }
    changeValue = (e) => {
        var valueIn = e.target.value;
        if(valueIn !== ''){
                this.setState({
                num: Number.parseInt(valueIn)

            })
        } else this.setState({ num: ''})
    }

    render() {
        return (
            <div>
                <PageTitle title="Seminar" />
                <div className="semimar">
                    <div className="container">
                        {
                            this.props.loading ? <div className="example"><Spin /></div> :
                                <div className="list-seminar">
                                    {this.getList(this.props.seminars).map((value, key) => (
                                        <div className="s-item col-6" key={key}>
                                            <div className="image col-md-5">
                                                <img alt="" src={software} />
                                            </div>
                                            <div className="content col-md-7">
                                                <div className="title">
                                                    <h2>{value.title}</h2>
                                                </div>
                                                <div className="info">
                                                    <p>Id: {value.id}</p>
                                                    <p>Presenter: {value.presenter}</p>
                                                    <p>Description: Lorumpiht 124</p>
                                                    <p>Recording: <a href={value.recordingLink}>{value.recordingLink}</a></p>
                                                    <p>Slides: <a href={value.slideLink}>{value.slideLink}</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                        }
                    </div>
                    {this.state.totalPages > 0 &&
                        (<div className="pagination">
                            <ul>
                                <li onClick={() => this.prevPage()}><i className="fa fa-chevron-left" aria-hidden="true"></i></li>
                                <li><input className="input-page" type="" onKeyPress={(event) => this.changePage(event)} onChange={(event) => this.changeValue(event)} value={this.state.num}/> of <span>{this.state.totalPages}</span></li>
                                <li onClick={() => this.nextPage()} ><i className="fa fa-chevron-right" aria-hidden="true"></i></li>
                            </ul>
                        </div>)}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        seminars: state.seminars,
        loading: state.loading
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getDataSeminar: () => {
            dispatch(actions.getDataSeminarRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seminar);