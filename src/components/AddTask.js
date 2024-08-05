import React from 'react';

export const AddTask = ({ taskList, setTasklist, task, setTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!task.name || task.name.trim() === "") {
      alert("Task name cannot be empty");
      return;
    }

    const date = new Date();
    if (task.id) {
      const updatedTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }
          : todo
      );
      setTasklist(updatedTaskList);
      setTask({});
    } else {
      const newTask = {
        id: date.getTime(),
        name: event.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTasklist([...taskList, newTask]);
      setTask({});
    }
  };

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete='off'
          placeholder='Add Task'
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type='submit'>{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
