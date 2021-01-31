import * as actionTypes from './actionTypes';
import axios from "axios";

export const getNotes = () => {
    console.log("getNotes")
    return dispatch => {
        axios.get("https://todo-13203-default-rtdb.firebaseio.com/notes.json")
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

export const addNote = (e) => {
    e.preventDefault()
    console.log("addNote")
    const note = {
        'title': e.target['title'].value,
        'note': e.target['note'].value,
    }
    return dispatch => {
        axios.post("https://todo-13203-default-rtdb.firebaseio.com/notes.json", note)
            .then(r => {
                console.log("[addNote] response",r)
                dispatch(addNoteSuccess(r))
                e.target['title'].value = "";
                e.target['note'].value = "";
            })
            .catch(err => {
                console.log("ERR",err)
                dispatch(addNoteFail(err))
            })
    }
}

export const addNoteSuccess = (note) => {
    console.log('[addNoteSuccess]')
    return {
        type: actionTypes.ADD_NOTE_SUCCESS,
        payload: note
    };
}

export const addNoteFail = (error) => {
    console.log("[addNoteFail]")
    return {
        type: actionTypes.ADD_NOTE_FAIL,
        payload: error
    };
}