import React from 'react';
import Item from './Item';

const List = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                        <>
                            <p>やることリスト</p>
                            <Item
                                content={todo.content}
                                key={todo.id}
                                id={todo.id}
                                deleteTodo={deleteTodo}
                            />
                        </>
                    )
                })
            }
        </ul>
    )
}
export default List;