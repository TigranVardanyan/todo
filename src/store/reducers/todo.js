import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: []
};

const todo = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_NOTES:
            return state;
        case actionTypes.GET_NOTES_SUCCESS:
            console.log("action payload", action.payload)
            return ({...state, data : action.payload});
        case actionTypes.GET_NOTES_FAIL:
            return state;
        case actionTypes.ADD_NOTE:
            return state;
        case actionTypes.ADD_NOTE_SUCCESS:
            return state;
        case actionTypes.ADD_NOTE_FAIL:
            return state;
        default:
            return state;
    }
};

export default todo