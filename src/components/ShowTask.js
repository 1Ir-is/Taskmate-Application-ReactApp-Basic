import React from 'react'

export const ShowTask = ({ taskList, setTasklist, task, setTask }) => {

    const handleUpdate = (id) => {
        const selectedTask = taskList.find((task) => task.id === id);
        setTask(selectedTask);
    }

    const handleDelete = (id) => {
        const updatedTaskList = taskList.filter((task) => task.id !== id);
        setTasklist(updatedTaskList);
    }



    return (
        <section className='showTask'>
            <div className="head">
                <div>
                    <span className='title'>Todo</span>
                    <span className='count'>{taskList.length}</span>
                </div>
                <button className='clearAll' onClick={() => setTasklist([])} >Clear All</button>
            </div>
            <ul>
                {taskList.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className='name'>{task.name}</span>
                            <span className='time'>{task.time}</span>
                        </p>
                        <i onClick={() => handleUpdate(task.id)} className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
                    </li>
                ))}

            </ul>
        </section>
    )
}
