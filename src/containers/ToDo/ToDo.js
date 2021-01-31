import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {connect} from "react-redux";
import {getNotes, addNote} from '../../store/actions/todo';
import Notes from "../../components/Notes/Notes"


const ToDo = (props) => {

    const onNoteSubmit = (e) => {
        props.addNote(e)
    }
    return (
        <React.Fragment>
            <form
                method={'post'}
                onSubmit={onNoteSubmit}
            >
                <div>
                <TextField
                    id="title"
                    label="Title"
                    name={"title"}
                />
                <br/>
                <TextField
                    id="note"
                    label="Note"
                    name={"note"}
                />
                </div>
                <Fab
                    type={"submit"}
                    aria-label="add">
                    <AddIcon/>
                </Fab>
            </form>
            <Notes/>
        </React.Fragment>
    )
}

const mapDispatchToProps = {
    addNote
};

export default connect(null, mapDispatchToProps)(ToDo);