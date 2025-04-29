import {useCallback, useMemo, useState} from "react";
import {Task} from "../types";
import {mockTasks} from "../data/mock.ts";

const useTaskList = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const sortedTasks = useMemo(() => {
    return tasks.sort((a, b) => {
      // completed tasks should be at the bottom
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });
  }, [tasks]);

  const toggleTaskCompleted = useCallback((id: string) => {
    const updatedTasks = tasks.map(task => {
      // toggle task completed based on id
      if (task.id === id) {
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updatedTasks);
  }, [tasks]);

  const deleteTask = useCallback((id: string) => {
    // delete task based on id by filtering out the task
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }, [tasks]);

  return {
    tasks: sortedTasks,
    toggleTaskCompleted,
    deleteTask,
  }
}

export default useTaskList;