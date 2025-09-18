import React, { useState } from 'react';
import checkIcon from './check.png';
import trashIcon from './trash.png';

export default function Home() {
  const [taskInput, setTaskInput] = useState('');
  const [todoTask, setTodoTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleTask = (event) => {
    event.preventDefault();
    if (taskInput.trim() === '') return; // prevent empty tasks
    setTodoTask([...todoTask, taskInput.trim()]);
    setTaskInput('');
  };

  // Mark task as completed
  const completeTask = (index) => {
    const taskToComplete = todoTask[index];
    setTodoTask(todoTask.filter((_, i) => i !== index));
    setCompletedTask([...completedTask, taskToComplete]);
  };

  // Delete a task from todo
  const deleteTask = (index) => {
    setTodoTask(todoTask.filter((_, i) => i !== index));
  };

  // Delete a task from completed
  const deleteCompletedTask = (index) => {
    setCompletedTask(completedTask.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1 className="app-title">TaskBuddy</h1>
          <p className="app-subtitle">Manage your Tasks</p>
        </div>
      </header>

      {/* Task Input Section */}
      <section className="task-input-section">
        <form className="task-form" onSubmit={handleTask}>
          <div className="task-wrapper">
            <input
              type="text"
              id="taskInput"
              className="task-input"
              placeholder="What needs to be done today?"
              maxLength={200}
              autoComplete="off"
              required
              value={taskInput}
              onChange={handleInputChange}
            />
            <div className="char-count">
              <span id="charCount">{taskInput.length}</span>/200
            </div>
          </div>
          <button className="add-task-btn" type="submit">
            ADD TASK
          </button>
        </form>
      </section>

      {/* Tasks Section */}
      <main className="task-main">
        {/* To-Do Tasks */}
        <div className="task-column todo-column">
          <div className="column-header">
            <div className="column-title">
              <span>To-Do</span>
            </div>
          </div>
          <ul>
            {todoTask.length === 0 ? (
              <div className="empty-state">
                <div className="empty-title">No pending tasks</div>
                <div className="empty-discription">
                  Add a new task above to get started
                </div>
              </div>
            ) : (
              todoTask.map((t, index) => (
                <li key={index} className="task-item">
                  <span>{t}</span>
                  <div className="task-actions">
                    <button
                      className="mark-button"
                      onClick={() => completeTask(index)}
                      title="Mark as completed"
                    >
                      <img src={checkIcon} alt="Complete task" />
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => deleteTask(index)}
                      title="Delete this task"
                    >
                      <img src={trashIcon} alt="Delete task" />
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Completed Tasks */}
        <div className="task-column completed-column">
          <div className="column-header">
            <div className="column-title">
              <span>Completed</span>
            </div>
          </div>
          <div className="task-list" id="completed-list">
            {completedTask.length === 0 ? (
              <div className="empty-state">
                <div className="empty-title">No completed tasks</div>
                <div className="empty-discription">
                  Complete tasks to see them here
                </div>
              </div>
            ) : (
              <ul>
                {completedTask.map((task, index) => (
                  <li key={index} className="task-item completed-task">
                    <span>{task}</span>
                    <div className="task-actions">
                      <button
                        className="delete-button"
                        onClick={() => deleteCompletedTask(index)}
                        title="Delete this completed task"
                      >
                        <img src={trashIcon} alt="Delete task" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
