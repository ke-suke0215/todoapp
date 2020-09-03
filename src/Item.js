import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
            <IconButton onClick={handleDelete} aria-label="delete" className={classes.margin}>
                <DeleteIcon />
            </IconButton>
        </li>
    )
}

export default Item;
