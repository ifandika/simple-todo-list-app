import React, { useState } from "react";
import './ToDoList.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  /**
   * Ini untuk menangani input task
   * @param {*} event 
   */
  function handleInputTaskChange(event) {
    setNewTask(event.target.value);
  }

  /**
   * Fungsi tombol tambah task
   */
  function addTask() {
    if(newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  /**
   * Fungsi untuk handle tombol delete task
   * @param {*} index 
   */
  function deleteTask(index) {
    const updatedTasks = tasks.filter((tasks, i) => i !== index);
    setTasks(updatedTasks);
  }

  /**
   * Fungsi ini untuk handle tombol menaikan task
   * @param {*} index 
   */
  function moveTaskUp(index) {
    if(index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index-1]] = 
      [updatedTasks[index-1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  /**
   * Fungsi ini untuk handle tombol menurunkan task
   * @param {*} index 
   */
  function moveTaskDown(index) {
    if(index < tasks.length-1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index+1]] = 
      [updatedTasks[index+1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  /**
   * Fungsi untuk tampilan web page
   */
  return (
    <div className="todo-list">
      <div className="base">
        <h1>Simple To Do List App</h1>
        <p><i>Create by <a href="https://ifandika.github.io">Ifandika</a></i> ❤️</p>

        <div className="base-input">
          <input 
            className="input-task"
            type="text"
            value={newTask}
            placeholder="Enter new task here ..."
            onChange={handleInputTaskChange}
          />
          <button
            className="button-add"
            onClick={addTask}>
            Add Task
          </button>
        </div>

        <div>
          <ol>
            {tasks.map((task, index) => 
              <li key={index}>

                <div className="base-task">

                  <div className="base-title">
                    <span className="title-task">{task}</span>
                  </div>
                  
                  <div className="base-move">
                    <button
                      className="button-move-task up"
                      onClick={() => moveTaskUp(index)}>
                      <i class="bi bi-caret-up-square"></i>
                    </button>
                    <button
                      className="button-move-task down"
                      onClick={() => moveTaskDown(index)}>
                      <i class="bi bi-caret-down-square"></i>
                    </button>
                  </div>
                  
                  <div className="base-delete">
                    <button
                      className="delete-button"
                      onClick={() => deleteTask(index)}>
                      Delete Task
                    </button>
                  </div>

                </div>
              </li>
            )}
          </ol>
        </div>

      </div>
    </div>
  )
}

export default ToDoList;