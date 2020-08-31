import React from 'react';
import Item from './Item';

const List = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {
                todos.map((todo, index) => {
                    return (
                        <>
                            <Item
                                content={todo.content}
                                key={todo.id}
                                id={todo.id}
                                deleteTodo={deleteTodo}
                                index={index}
                            />
                        </>
                    )
                })
            }
        </ul>
    )
}
export default List;