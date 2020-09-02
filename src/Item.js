import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


const Item = ({ content, id, deleteTodo, index }) => {
    const classes = useStyles();

    const [isDone, setIsDone] = useState(false)

    const handleDelete = () => {
        deleteTodo(id)
    }

    return (
        <li>
            <span>{index + 1}</span>
            <Checkbox
                onChange={() => {
                    setIsDone(!isDone)
                }}
            />
            <span style={
                { textDecoration: isDone ? 'line-through' : 'none' }
            }>{content}</span>
            <Button onClick={handleDelete} variant="contained" color="primary" disableElevation>
                削除
            </Button>
            <Button color="primary">Primary</Button>
            <Button variant="outlined" color="primary">
                Primary
            </Button>
            {/* <IconButton aria-label="delete" className={classes.margin}>
                <DeleteIcon fontSize="large" />
            </IconButton> */}
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
        </li>
    )
}

export default Item;
