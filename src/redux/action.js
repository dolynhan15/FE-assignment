import * as types from "./constants/ActionTypes";
import * as operation from "../utils/API.service";

export const getDataPending = () => {
    return {
        type: types.GET_DATA_PENDING
    }
}
//Traning Plan
    // export const getDataTrainingPlanRequest = () => {
    //     getDataPending();
    //     return (dispatch) => {
    //         callApi('a6243029-a295-4991-a3c4-516328407e86', 'GET', null).then(res =>{
    //             console.log(res.data);
    //             dispatch(getDataTrainingPlanSuccess(res.data));
    //         })
    //     }
    // }
    // export const getDataTrainingPlanSuccess = (data) => {
    //     return {    
    //         type: types.GET_DATA_TRAINGING_PLAN_SUCCESS,
    //         payload: data
    //     }
    // }
    // export const getDataTPlanDetailRequest = () => {
    //     getDataPending();
    //     return (dispatch) => {
    //         callApi('8c7e3d7b-4e40-4e00-b235-f2edfce3f68b', 'GET', null).then(res =>{
    //             dispatch(getDataTPlanDetailSuccess(res.data));
    //         })
    //     }
    // }
    // export const getDataTPlanDetailSuccess = (data) => {
    //     return {
    //         type: types.GET_DATA_TPLAN_DETAIL_SUCCESS,
    //         payload: data
    //     }
    // }
//End Training Plan

//Seminars
export const getDataSeminarRequest = () => {
    getDataPending();
    return (dispatch) => {
        operation.getDataSeminarAPI().then(res =>{
            dispatch(getDataSeminarSuccess(res.data));
        })
    }
}
export const getDataSeminarSuccess = (data) => {
    return {
        type: types.GET_DATA_SEMINAR_SUCCESS,
        payload: data
    }
}
//End Seminars

//FAQ
export const getDataFAQRequest = () => {
    getDataPending();
    return (dispatch) => {
        operation.getDataFAQAPI().then(res =>{
            dispatch(getDataFAQSuccess(res.data));
        })
    };
}
export const getDataFAQSuccess = (data) => {
    return {
        type: types.GET_DATA_FAQ,
        payload: data
    }
}
export const addComment = (commentObj) => {
    return (dispatch) => {
        operation.addCommentAPI(commentObj).then(res =>{
            console.log(res.config.data);
            dispatch(addCommentSuccess(res.config.data));
            alert(res.statusText);
        })
    }
}
export const addCommentSuccess = (comments) => {
    console.log(comments);
    return {
        type: types.ADD_COMMENT,
        payload: comments
    }
}
//end FAQ

//new question
export const addNewQuestion  = (questionObj) => {
    return (dispatch) => {
        operation.addQuestionAPI(questionObj).then(res =>{
            dispatch(addNewQuestionSuccess(res.config.data));
            console.log(res.config.data);
            alert(res.statusText);
        })
    }
}
export const addNewQuestionSuccess = (questions) => {
    return {
        type: types.ADD_NEW_QUESTION,
        payload: questions
    }
}
//end new question

//manage Question
export const getDataQuestionRequest = () => {
    getDataPending();
    return (dispatch) => {
        operation.getQuestionAPI().then(res =>{
            console.log(res.data);
            dispatch(getDataQuestionSuccess(res.data));     
        })
    };
}
export const getDataQuestionSuccess = (data) => {
    return {
        type: types.GET_DATA_QUESTION,
        payload: data
    }
}
export const deleteQuestion = (id) => {
    return {
        type: types.DELETE_QUESTION,
        payload: id
    }
}
export const setQuestion = (data) => {
    return {
        type: types.SET_QUESTION,
        payload: data
    }
}
export const editQuestion = (data) => {
    return {
        type: types.EDIT_QUESTION,
        payload: data
    }
}
//end manage Question

export const getDataFail = (error) => {
    return {
        type: types.GET_DATA_FAIL,
        payload: error
    }
}