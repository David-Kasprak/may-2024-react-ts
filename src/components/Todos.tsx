import React, {FC} from 'react';
import {ITodo} from "../models/ITodo";

type TodosProps = {
    todos: ITodo[];
}

const Todos: FC<TodosProps> = ({todos}) => {
    return (
        <div>
            {
                todos.map(item => (<div>{item.todo}</div>))
            }
        </div>
    );
};

export default Todos;