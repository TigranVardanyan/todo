import React, {useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

import {connect} from "react-redux";
import {getNotes} from '../../store/actions/todo';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

const Notes = (props) => {
    let data = [];
    let content;

    const classes = useStyles();

    useEffect(() => {
        props.getNotes();
    }, []);
    console.log("props", props)
    if (props.data) {
        console.log('data')
        content = (
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {Object.keys(props.data).map((item, index) => {
                        // console.log("item", item)
                        // console.log("index", index)
                        console.log(props.data[item])
                        return (
                            <GridListTile key={index} cols={1}>
                                <h4>{props.data[item].title}</h4>
                                <h5>{props.data[item].note}</h5>
                            </GridListTile>
                        )
                    })}
                </GridList>
            </div>
        )
    }
    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )
}


const mapStateToProps = state => {
    console.log("[Notes] mapStateToProps",state);
    return {
        data: state.todo.data
    }
};

const mapDispatchToProps = {
    getNotes
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);