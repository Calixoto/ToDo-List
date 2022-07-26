import { useEffect, useState } from "react";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";

function App() {
  const [newTask, setNewTask] = useState([
    { id: 0, text: "", isCompleted: false },
  ]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [countCompletedTask, setCountCompletedTask] = useState(0);

  function handleGetText(value: string) {
    if (newTask[0].text === "") {
      setNewTask([{ id: 0, text: value, isCompleted: false }]);
    } else {
      setNewTask([
        ...newTask,
        { id: newTask.length, text: value, isCompleted: false },
      ]);
    }
  }

  function handleCompleteTask(id: number) {
    setNewTask(
      newTask.map((task) => {
        if (task.id === id) {
          setCountCompletedTask(
            !task.isCompleted ? countCompletedTask + 1 : countCompletedTask - 1
          );
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  }

  function handleDeleteTask(id: number) {
    setNewTask(
      newTask.length === 1
        ? [{ id: 0, text: "", isCompleted: false }]
        : newTask.filter((task) => {
            if (task.id === id) {
              if (task.isCompleted) {
                setCountCompletedTask(countCompletedTask - 1);
              }
              return false;
            }
            return true;
          })
    );
  }

  console.log(newTask);

  useEffect(() => {
    if (newTask.length === 1 && newTask[0].text === "") {
      setCountCompletedTask(0);
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [newTask]);

  return (
    <>
      <NewTask handleGetText={handleGetText} />
      <Tasks
        handleDeleteTask={handleDeleteTask}
        countCompletedTask={countCompletedTask}
        tasks={newTask}
        isEmpty={isEmpty}
        handleCompleteTask={handleCompleteTask}
      />
    </>
  );
}

export default App;
