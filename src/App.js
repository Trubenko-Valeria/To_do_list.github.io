import React from "react";
import { ListItem } from "./components/ListItem";
import { TaskField } from "./components/TaskField";

function App() {
  const [tasks, setTasks] = React.useState([
    {
      text: "To learn ReactJS",
      completed: true,
    },
    {
      text: "To fold To_do_list in ReactJS",
      completed: true,
    },
    {
      text: "To deploy To_do_list in GitHub",
      completed: true,
    },
    {
      text: "To deploy To_do_list in GitHub Pages",
      completed: false,
    },
  ]);

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) =>
        index === curIdx
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const onRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, curIdx) => index !== curIdx));
  };

  const onAddTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);
  };

  return (
    <div className="todo">
      <img
        className="todo__logo"
        alt="Small picture"
        style={{ width: 45, height: 45 }}
        src="https://png.pngtree.com/png-clipart/20210309/original/pngtree-vector-modern-mandala-png-image_5884753.png"
      />
      <div className="todo__header">
        <h4>Task list</h4>
      </div>
      <TaskField onAddTask={onAddTask} />
      <div className="todo__list">
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            text={task.text}
            completed={task.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
