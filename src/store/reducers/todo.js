import * as actionTypes from '../actions/actionTypes';
import {ADD_NOTE, ADD_NOTE_SUCCESS} from "../actions/actionTypes";

const initialState = {
    data: []
};

const todo = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_NOTES:
            console.log("[GET_NOTES]", action.payload)
            return state;
        case actionTypes.GET_NOTES_SUCCESS:
            console.log("[GET_NOTES_SUCCESS]", action.payload)
            return ({...state, data : action.payload});
        case actionTypes.GET_NOTES_FAIL:
            return state;
        case actionTypes.ADD_NOTE_SUCCESS:
            console.log("[ADD_NOTE_SUCCESS]")
            let newData = {...state.data}
            newData[action.payload.data.name] = JSON.parse(action.payload.config.data);
            return ({...state, data : newData});
        case actionTypes.ADD_NOTE_FAIL:
            return state;
        default:
            return state;
    }
};

export default todo