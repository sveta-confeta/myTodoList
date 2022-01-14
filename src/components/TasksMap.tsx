import React from 'react';
import s from "../Todolist.module.css";
import {Button} from "./Button";
import {TasksType} from "../Todolist";

type TasksMapPropsTYpe={
    tasks: Array<TasksType>
    removeTask: (id: string) => void
    chengeCheckBoxStatus: (id:string,value: boolean) => void
}

export const TasksMap = (props:TasksMapPropsTYpe) => {
    const removeTaskHandler = (tId: string) =>
        props.removeTask(tId);
    const onChangeCheckbox=(elID:string,value:boolean)=>{
        props.chengeCheckBoxStatus(elID, value);

    }
    return (
        <ul className={s.todolist_tasks}>
            {props.tasks.map(el => <li key={el.id} className={el.isDone ? s.isDone: '' }><input type="checkbox"
                                                                                                checked={el.isDone}
                                                                                                onChange={(event) =>onChangeCheckbox(el.id,event.currentTarget.checked)}/>
                <span>{el.task}</span>
                {/*<button onClick={() => props.removeTask(el.id)}>x</button>*/}
                <Button name={'x'} callback={() => removeTaskHandler(el.id)}/>
            </li>)}

        </ul>
    );
};
