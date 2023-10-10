import { useState } from "react"

export const TaskCreator = ({createNewTask}) => {
    

    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTask)
        localStorage.setItem('tasks', newTask)
        setNewTask('');
    };

    return (
        <form onSubmit={handleSubmit} >
            <input type='text'
                placeholder='Enter a new task'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)} />
            <button>Save task</button>
        </form>
    );
    };

