import TaskShow from './TaskShow'

const TaskList = ({tasks,onDelete,onUpdate}) => {
  return (
    <div className='task-list'>
       {tasks.map((task)=>{
        return(
            <TaskShow key={task.id} onDelete={onDelete} task={task} onUpdate={onUpdate}/>
        )
       })}
    </div>
  )
}

export default TaskList