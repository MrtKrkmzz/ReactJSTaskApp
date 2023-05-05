import React, { useState } from "react";

const Taskcreate = ({ onCreate, task, taskFormUpdate,onUpdate }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(taskFormUpdate){
        onUpdate(task.id,title,taskDesc)
    }else{
        onCreate(title, taskDesc)
    }
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };
  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Lütfen Task ı Düzenleyiniz</h3>
          <form className="task-form" onSubmit={handleSubmit}>
            <label className="task-label" htmlFor="baslik">
              Başlığı Düzenleyiniz
            </label>
            <input
              value={title}
              className="task-input"
              type="text"
              id="baslik"
              onChange={handleChange}
            />
            <label className="task-label" htmlFor="task">
              Task ı Düzenleyiniz
            </label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              id="task"
            ></textarea>
            <button className="task-button update-button" onClick={handleSubmit}>Düzenle</button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Task Ekleyiniz</h3>
          <form className="task-form" onSubmit={handleSubmit}>
            <label className="task-label" htmlFor="baslik">
              Başlık
            </label>
            <input
              value={title}
              className="task-input"
              type="text"
              id="baslik"
              onChange={handleChange}
            />
            <label className="task-label" htmlFor="task">
              Task Giriniz
            </label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              id="task"
            ></textarea>
            <button className="task-button">Oluştur</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Taskcreate;
