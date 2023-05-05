
import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import Taskcreate from './components/Taskcreate'

function App() {
 const [tasks,setTasks]=useState([])
 const createTask = (title,taskDesc) => {
  const createdTasks=[
    ...tasks,{
      id: Math.round(Math.random()*999999),
      title:title,
      taskDesc:taskDesc
    }
  ];
  setTasks(createdTasks);
 }
 const deleteTaskById = (id) =>{
 setTasks(tasks.filter((task)=>(task.id !== id)))
}
 const editTaskById = (id,updatedTitle,updatedTaskDesc) =>{
   const updatedTasks = tasks.map((task)=>{
    if(task.id===id)
    {
      return {id,title:updatedTitle,taskDesc:updatedTaskDesc}
    }
    return task;
   });
   setTasks(updatedTasks)
}
  return (
    <div className='App'>
      <Taskcreate onCreate={createTask}/>
      <h1>GÖREVLER</h1>
      <TaskList tasks={tasks}  onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  )
}

export default App
