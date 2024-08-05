import React from 'react'

export const ShowTask = () => {

    const tasks = [
        { id: 1, name: 'Task A', time: '10:03:20024' },
        { id: 2, name: 'Task B', time: '10:03:20024' },
        { id: 3, name: 'Task C', time: '10:03:20024' }
    ]

    return (
        <section className='showTask'>
            <div className="head">
                <div>
                    <span className='title'>Todo</span>
                    <span className='count'>0</span>
                </div>
                <button className='clearAll'>Clear All</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li>
                        <p>
                            <span className='name'>{task.name}</span>
                            <span className='time'>{task.time}</span>
                        </p>
                        <i class="bi bi-pencil-square"></i>
                        <i class="bi bi-trash"></i>
                    </li>
                ))}

            </ul>
        </section>
    )
}
