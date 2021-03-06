import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ content, id, deleteTodo, index }) => {
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
            <button onClick={handleDelete}>削除</button>
        </li>
    )
}

export default Item;
