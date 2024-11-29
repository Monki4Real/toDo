import { useState } from 'react'

export const CreateTask = ({ addTask }) => {
    const [task, setTask] = useState('')

    const handleInputChange = (event) => {
        setTask(event.target.value);
    }

    const handleAddTask = () => {
        if (task.trim()) {
            addTask(task);
            setTask('');
        }
    }
    return (
        <>
            <div className="createTask">
                <div className="sendTask text-[#04294d]">
                    <input type="text"
                        value={task}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleAddTask} className="button-text cursor-pointer bg-[#fafafa] m-5 rounded-lg text-center p-2">Create task</button>
                </div>
            </div>
        </>
    )
}