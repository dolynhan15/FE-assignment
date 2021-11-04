import React, { Component } from 'react';
import PageTitle from '../page-title/PageTitle';
import callApi from '../../utils/apiCaller';

class TrainingPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            trainingPlans: [
                {
                    title: 'Trainning Plan for Intern',
                    traningPlanWeek: [],
                    trainingPlanDetail: [],
                },
            ],
            isShow: -1
        }
    }
    getTrainingPlan = () => {
        callApi('a6243029-a295-4991-a3c4-516328407e86', 'GET', null).then(res =>{
            res.data.map((val) => (
                this.state.trainingPlans.map((values) => (
                    values.traningPlanWeek.push(val)
                ))
            ))
        })
    }
    getTPlanDetail = () => {
        callApi('8c7e3d7b-4e40-4e00-b235-f2edfce3f68b', 'GET', null).then(res =>{
            res.data.map(val => (
                this.state.trainingPlans.map(values => (
                    values.trainingPlanDetail.push(val)
                ))  
            ))
        })
    }
    convertData = () => {
        var result = []
        this.state.trainingPlans.map(val => {
            console.log(val)
            val.traningPlanWeek.sort((a, b) => a.week_id < b.week_id)
            val.traningPlanWeek.map((week) => (
                result = [...result, {
                    ...week,
                    detail: val.trainingPlanDetail.filter(value => value.week_id === week.week_id).sort((a, b) => a.order_in_week < b.order_in_week)
                }]
            ))
        })
        return result;
    }
    componentDidMount() {
        this.getTrainingPlan();
        this.getTPlanDetail();
    }
    showItem = (key) => {
        const { isShow } = this.state;
        if (isShow !== key) {
            this.setState({
                isShow: key
            })
        } else {
            this.setState({ isShow: '' })
        }
    }
    renderTable = (dataSource) => {
        return (
            <table className="table-column " border="1">
                <thead className="title-header" >
                    <tr>
                        <td style={{ width: '80px' }}>Start date</td>
                    </tr>
                    {this.convertData().map((val,key) => {
                        return (
                            <tr key={key}>
                                <td key="{val.label}">{val.label}</td>
                            </tr>
                        )
                    })}
                </thead>
                <tbody>
                    <tr className="column-start"/>
                    {this.convertData().map((val,key) => {
                        return (
                            <tr className="column-right" key={key}>
                                {val.detail.map((v,k) => <td key={k} style={{ width: (val.lenght / 7) * 80 + "px" }}><p key="{v.label}">{v.label}</p></td>)}
                            </tr>)
                    })}
                </tbody>
            </table>
        )
    }
    showList = (arr) => {
        const { isShow } = this.state;
        let res = arr.map((value, key) => {
            return (
                <div className="item" key={key}>
                    <div className="item-top">
                        <div className="title-content">
                            <h2 onClick={() => this.showItem(key)} key="{value.title}">{value.title}</h2>
                        </div>
                        <div className="btn-select">
                            <button onClick={() => this.showItem(key)}>{parseInt(isShow) === key ? <i className="fa fa-angle-up" aria-hidden="true"></i> : <i className="fa fa-angle-down" aria-hidden="true"></i>}</button>
                        </div>
                    </div>
                    <hr />
                    {parseInt(isShow) === key && <div className="traningPlanWeek">
                        {this.renderTable(this.convertData())}
                    </div>}
                </div>
            )
        })
        return res;
    }
    render() {
        const { trainingPlans} = this.state;
        return (
            <div>
                <PageTitle title="Training Plan" />
                <div className="training-plan">
                    <div className="container">
                        {this.showList(trainingPlans)}
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}
export default TrainingPlan;