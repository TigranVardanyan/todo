import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {connect} from "react-redux";
import {getNotes} from '../../store/actions/todo';

const ToDo = (props) => {

    useEffect(() => {
        props.getNotes();
    }, [])

    return (
        <React.Fragment>
            <form
                method={'post'}
                onSubmit={(e) => console.log(123)}
            >
                <TextField id="standard-basic" label="Take a note..."/>
                <Fab
                    type={"submit"}
                    aria-label="add">
                    <AddIcon/>
                </Fab>
            </form>
        </React.Fragment>
    )
}

const mapDispatchToProps = {
    getNotes
};

export default connect(null, mapDispatchToProps)(ToDo);