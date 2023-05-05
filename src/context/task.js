import { createContext } from "react";

const TaskContext = createContext()

function Provider({Children}){
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
        <TaskContext.Provider>{Children}</TaskContext.Provider>
    )
}
export {Provider};
export default TaskContext;