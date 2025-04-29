import {useCallback, useMemo, useState} from "react";
import {mockTasks} from "../data/mock.ts";
import TaskRow from "./TaskRow.tsx";
import ActionButton from "./ActionButton.tsx";
import {Task} from "../types";

const TasksWrapper = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const sortedTasks = useMemo(() => {
    return tasks.sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });
  }, [tasks]);

  const readableDate = useMemo((): string => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "2-digit",
      year: "numeric",
    })
  }, []);

  const toggleTaskCompleted = useCallback((id: string) => {
    // toggle task completed based on id
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updatedTasks);
  }, [tasks]);

  const deleteTask = useCallback((id: string) => {
    // delete task based on id
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }, [tasks]);

  const renderEmptyState = useCallback(() => {
    return (
      <div className="flex flex-col items-center justify-center h-full pt-20">
        <p className="text-gray-500 text-lg">No tasks available</p>
        <p className="text-gray-400">Click the button above to add a task</p>
      </div>
    );
  }, []);

  const renderTasks = useCallback(() => {
    if (!sortedTasks.length) return null;

    return sortedTasks.map((task, index) => (
      <TaskRow
        key={index}
        task={task}
        toggleCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
      />
    ));
  }, [sortedTasks, toggleTaskCompleted, deleteTask]);

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
        {sortedTasks.length ? renderTasks() : renderEmptyState()}
      </div>
    </section>
  );
}

export default TasksWrapper;