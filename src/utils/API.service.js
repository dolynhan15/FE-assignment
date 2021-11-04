import callApi from './apiCaller';

//seminar
export const getDataSeminarAPI = () => {
    return callApi('4e956233-e293-403d-8058-02bcf35893aa', 'GET', null);
}
//end seminar

//faq
export const getDataFAQAPI = () => {
    return callApi('f8efca5e-eaf7-40f2-851a-e04d771548af', 'GET', null);
}
export const addCommentAPI = (commentObj) => {
    return callApi('17614340-f690-4728-8413-0ccf00c3ae5b', 'POST', {commentObj}, null);
}
//end faq

//new question
export const addQuestionAPI = (questionObj) => {
    return callApi('9fd3ba24-7da6-4709-a958-b00a6440e0d0', 'POST', {questionObj}, null)
}
// end new question

//manage question
export const getQuestionAPI = () => {
    return callApi('52f8be61-465d-4062-a675-0f125e388860' , 'GET', null)
}
//end manage question