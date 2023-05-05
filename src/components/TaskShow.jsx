import React, { useState } from 'react'
import Taskcreate from './Taskcreate'

const TaskShow = ({task,onDelete,onUpdate}) => {
    const [showEdit,setShowEdit]=useState(false)
    const handleDeleteClick =()=>{
        onDelete(task.id)
    }
    const handleEditClick =()=>{
        setShowEdit(!showEdit)
    }

    const handleSubmit =(id,updatedTitle,updatedTaskDesc)=>{
        setShowEdit(!showEdit)
        onUpdate(id,updatedTitle,updatedTaskDesc)
    }
  return (
    <div className='task-show'>
       {showEdit ? (<Taskcreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>) : (
        <div>
            <h3 className='task-title'>Göreviniz</h3>
        <p>{task.title}</p>
        <h3 className='task-title'>Yapılacaklar</h3>
        <p>{task.taskDesc}</p>
        <div>
            <button onClick={handleDeleteClick} className='task-delete'>Sil</button>
            <button onClick={handleEditClick} className='task-edit'>Güncelle</button>
        </div>
       </div>
       )}
    </div>
  )
}

export default TaskShow