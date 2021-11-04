import * as types from "./constants/ActionTypes";
const initialState = {
    trainingPlan: [],
    trainingPlanDetail: [],
    seminars: [],
    faqs: [],
    comments: {},
    questions: {},
    manageQuestion: [],
    tempQuestion: null,
    loading: false,
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DATA_PENDING:
            {
                return {
                    ...state,
                    loading: true
                }
            }
        // case types.GET_DATA_TRAINGING_PLAN_SUCCESS:
        //     {
        //         return {
        //             ...state,
        //             loading: false,
        //             trainingPlan: action.payload
        //         }
        //     }

        // case types.GET_DATA_TPLAN_DETAIL_SUCCESS:
        //     {
        //         return {
        //             ...state,
        //             loading: false,
        //             trainingPlanDetail: action.payload
        //         }
        //     }
        case types.GET_DATA_SEMINAR_SUCCESS:
            {
                return {
                    ...state,
                    loading: false,
                    seminars: action.payload,
                }
            }
        case types.GET_DATA_FAQ:
            {
                return {
                    ...state,
                    loading: false,
                    faqs: action.payload
                }
            }
        case types.ADD_COMMENT:
            {
                return {
                    ...state,
                    loading: false,
                    comments: action.payload
                }
            }
        case types.ADD_NEW_QUESTION:
            {
                return {
                    ...state,
                    loading: false,
                    questions: action.payload
                }
            }
        case types.SET_QUESTION:
            {
                return {
                    ...state,
                    tempQuestion: action.payload
                }
            }
        case types.EDIT_QUESTION:
            {
                const temp = [...state.manageQuestion];
                const {idEdit, questionEdit} = action.payload;
                const indexQuestion = temp.findIndex(item => item.id === idEdit);
                temp[indexQuestion] = questionEdit;
                return {
                    ...state,
                    manageQuestion: temp,
                    tempQuestion: null
                }
            }
        case types.DELETE_QUESTION:
        {
            const idRemove = action.payload;
            const manageQuestion = state.manageQuestion.filter(question => question.id !== idRemove);
            console.log(state.manageQuestion);
            return {
                ...state,
                manageQuestion: manageQuestion
            }
        }
        case types.GET_DATA_QUESTION:
            {
                return {
                    ...state,
                    loading: false,
                    manageQuestion: action.payload
                }
            }
        case types.GET_DATA_FAIL:
            {
                return {
                    ...state,
                    loading: false,
                    error: action.payload,
                    trainingPlan: []
                }
            }
        default: return state;
    }
}
export default myReducer;