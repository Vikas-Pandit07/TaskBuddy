import React, { useState } from 'react'

export default function Home() {
  const [taskInput, setTaskInput] = useState('');
  const [todoTask, setTodoTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleTask = (event) => {
    event.preventDefault();
    setTodoTask([...todoTask, taskInput]);
    setTaskInput('');
  }



  return (
    <>
        <div className='container'>
          <header className='header'>
            <div className='header-content'>
              <div>
                <h1 className='app-title'>TaskBuddy</h1>
                <p className='app-subtitle'>Manage your Tasks</p>
              </div>
            </div>
          </header>

          <section className='task-input-section'>  
            <form className='task-form' onSubmit={handleTask}>
              <div className='task-wrapper'>
                <input type="text" 
                        id='taskInput'
                        className='task-input'
                        placeholder='What needs to be done today?'
                        maxLength={200}
                        autoComplete='off'
                        required
                        value={taskInput}
                        onChange={handleInputChange}
                        />
                <div className='char-count'>
                  <span id='charCount'>{taskInput.length}</span>/200
                </div>
              </div>
              <button className='add-task-btn' type='submit'>ADD TASK</button>
            </form>
          </section>

          <main className='task-main'>
            <div className='task-column todo-column'>
              <div className='column-header'>
                <div className='column-title'>
                  <span>To-Do</span>
                </div>
              </div>
              <ul>
                {todoTask.length === 0 ? (
                  <div className='empty-state'>
                    <div className='empty-title'>No pending tasks</div>
                    <div className='empty-discription'>Add a new task above to get started</div>
                  </div>
                ) : (
                  todoTask.map((t, index) => (
                    <li key={index} className='task-item'>{t}</li>
                  ))
                )}
              </ul>
            </div>

            <div className='task-column completed-column'>
              <div className='column-header'>
                <div className='column-title'>
                  <span>Completed</span>
                </div>
              </div>

              <div className='task-list' id='completed list'>
                <div className='empty-state'>
                  <div className='empty-title'>No completed tasks</div>
                  <div className='empty-discription'>Complete task to see them here</div>
                </div>
              </div>
            </div>
          </main>
        </div>
    </>
  )
}
