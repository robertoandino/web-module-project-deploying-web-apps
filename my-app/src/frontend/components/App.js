import '../../App.css';
import React, { useState } from 'react'

function App() {

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [isDisabled, setIsDisabled] = useState(true)

  const onChange = (evt) => {
    setTask(evt.target.value);
    setIsDisabled(false)
  }

  const onSubmit = (evt) =>{
    evt.preventDefault();
    setTasks([...tasks, task]);
    setTask('')
    setIsDisabled(true)
  }

  return (
    <div>
      <h1 className="App">Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          className="input"
          value={task}
          placeholder="Type task"
          onChange={onChange}
        />
      <button className="button" type='submit' disabled={isDisabled}>Create Task</button>
      </form>
      <h2> Tasks: </h2>
      <ul>
      {tasks.map((task, index) => <li key={index}>{task}</li>)} 
      </ul>
    </div>
  );
}

export default App;
