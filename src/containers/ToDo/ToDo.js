import React from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const ToDO = () => {
    return (
        <React.Fragment>
            <TextField id="standard-basic" label="Take a note..." />
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </React.Fragment>
    )
}

export default ToDO;