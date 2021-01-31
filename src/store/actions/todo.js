import * as actionTypes from './actionTypes';
import axios from "axios";

export const getNotes = () => {
    console.log("getNotes")
    return dispatch => {
        axios.get("https://todo-13203-default-rtdb.firebaseio.com/orders.json")
            .then(r => {
                console.log("R",r)
                dispatch(getNotesSuccess(r.data))
            })
            .catch(err => {
                console.log("ERR",err)
                dispatch(getNotesFail(err))
            })
    }
};

export const getNotesSuccess = (data) => {
    return {
        type: actionTypes.GET_NOTES_SUCCESS,
        payload: data
    };
};

export const getNotesFail = (event) => {
    return {
        type: actionTypes.GET_NOTES_FAIL,
        payload: event
    };
};

export const addNote = (note) => {
    console.log("addNote")
    return dispatch => {
        axios.post("https://todo-13203-default-rtdb.firebaseio.com/notes.json", note)
            .then(r => {
                console.log("R",r)
                dispatch(addNoteSuccess(r.data))
            })
            .catch(err => {
                console.log("ERR",err)
                dispatch(addNoteFail(err))
            })
    }
}

export const addNoteSuccess = (note) => {
    return {
        type: actionTypes.ADD_NOTE_SUCCESS,
        payload: note
    };
}

export const addNoteFail = (error) => {
    return {
        type: actionTypes.ADD_NOTE_FAIL,
        payload: error
    };
}