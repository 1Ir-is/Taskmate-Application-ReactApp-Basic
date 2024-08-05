import React from 'react'

export const AddTask = ({ taskList, setTasklist, task, setTask }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        if (task.id) {
            const date = new Date();
            const updatedTaskList = taskList.map((todo) => (
                todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
            ));
            setTasklist(updatedTaskList);
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(), 
                name: event.target.task.value, 
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            };
    
            setTasklist([...taskList, newTask]);
            event.target.task.value = '';
        }

       
    }

  return (
    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task.name} autoComplete='off' placeholder='Add Task' maxLength="25" onChange={e => setTask({ ...task, name: e.target.value })}/>
            <button type='submit'>Add</button>
        </form>
    </section>
  )
}
