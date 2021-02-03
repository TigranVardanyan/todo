import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';
import {connect} from "react-redux";
import {getNotes} from '../../store/actions/todo';
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));

function getCols(screenWidth) {
  if (isWidthUp('xl', screenWidth)) {
    return 6;
  }
  if (isWidthUp('lg', screenWidth)) {
    return 5;
  }
  if (isWidthUp('md', screenWidth)) {
    return 4;
  }
  if (isWidthUp('sm', screenWidth)) {
    return 3;
  }
  return 2;
}

const Notes = (props) => {
  let data = [];
  let content;
  console.log('[getCols]', getCols())
  const classes = useStyles();
  useEffect(() => {
    props.getNotes();
  }, []);
  console.log("props", props)
  if (props.data) {
    console.log('data')
    content = (
      <div className={classes.root}>
        <GridList
          //className={classes.gridList}
          cellHeight={"auto"}
          cols={getCols(props.width)}
          spacing={10}
        >
          {Object.keys(props.data).map((item, index) => {
            // console.log("item", item)
            // console.log("index", index)
            //console.log(props.data[item])
            return (
              <GridListTile key={index} cols={1}>
                <h4>{props.data[item].title}</h4>
                <h5>{props.data[item].note}</h5>
                <IconButton aria-label={`star ${props.data[item].title}`} color={'primary'}>
                  <StarBorderIcon className={classes.title}/>
                </IconButton>
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
  console.log("[Notes] mapStateToProps", state);
  return {
    data: state.todo.data
  }
};
const mapDispatchToProps = {
  getNotes
};
export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(Notes));
