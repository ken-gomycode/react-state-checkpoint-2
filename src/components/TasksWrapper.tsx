import {useMemo, useState} from "react";
import {mockTasks} from "../data/mock.ts";
import TaskRow from "./TaskRow.tsx";
import ActionButton from "./ActionButton.tsx";

const TasksWrapper = () => {
  const [tasks, setTasks] = useState(mockTasks);

  const readableDate = useMemo((): string => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "2-digit",
      year: "numeric",
    })
  }, []);

  const toggleTaskCompleted = (id: string) => {
    // toggle task completed based on id
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    // delete task based on id
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  const taskRows = tasks.map((task, index) => (
    <TaskRow
      key={index}
      task={task}
      toggleCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  return (
    <section className="bg-white w-2/5 p-8 rounded" >
      <div className="flex justify-between items-center">
        <div className="text-left">
          <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>
          <p className="text-gray-500 text-sm mt-2">{readableDate}</p>
        </div>

        <ActionButton label='Add Task' />
      </div>

      <div className="mt-8 min-h-[400px] max-h-[80vh] overflow-y-scroll">
        {taskRows}
      </div>
    </section>
  );
}

export default TasksWrapper;