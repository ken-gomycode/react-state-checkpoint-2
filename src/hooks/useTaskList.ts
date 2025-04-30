import {useCallback, useMemo, useState} from "react";
import {AddEditTaskPayload, Task} from "../types";
import {capitalizeSentence} from "../utils/strings.ts";

const useTaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const sortedTasks = useMemo(() => {
    // sort tasks by title
    const sortedByTitle = tasks.sort((a, b) => a.title.localeCompare(b.title));

    return sortedByTitle.sort((a, b) => {
      // completed tasks should be at the bottom
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });
  }, [tasks]);

  const addTask = useCallback((newTask: AddEditTaskPayload) => {
    const taskToAdd = {
      id: crypto.randomUUID(),
      title: capitalizeSentence(newTask.title),
      description: capitalizeSentence(newTask.description),
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    setTasks(prevTasks => [...prevTasks, taskToAdd]);
  }, []);

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

  const updateTask = useCallback((id: string, updatedTask: AddEditTaskPayload) => {
    const updatedTasks = tasks.map(task => {
      // update task based on id
      if (task.id === id) {
        const taskToUpdate = {...task, ...updatedTask};
        taskToUpdate.title = capitalizeSentence(taskToUpdate.title);
        taskToUpdate.description = capitalizeSentence(taskToUpdate.description);
        return taskToUpdate;
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
    addTask,
    toggleTaskCompleted,
    updateTask,
    deleteTask,
  }
}

export default useTaskList;