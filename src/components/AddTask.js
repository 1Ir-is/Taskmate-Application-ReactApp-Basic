import React from 'react'

export const AddTask = ({ taskList, setTasklist }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const date = new Date();
        const newTask = {
            id: date.getTime(), 
            name: event.target.task.value, 
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        };

        setTasklist([...taskList, newTask]);
        event.target.task.value = '';
    }

  return (
    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" autoComplete='off' placeholder='Add Task' maxLength="25" />
            <button type='submit'>Add</button>
        </form>
    </section>
  )
}
