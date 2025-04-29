import {useMemo} from "react";
import TaskRow from "./TaskRow.tsx";
import ActionButton from "./ActionButton.tsx";
import useTaskList from "../hooks/useTaskList.ts";
import TasksEmptyState from "./TasksEmptyState.tsx";
import {getTodaysDate} from "../utils/dates.ts";

const TasksWrapper = () => {
  const {
    tasks,
    toggleTaskCompleted,
    deleteTask,
  } = useTaskList();

  const readableDate = useMemo((): string => getTodaysDate(), []);

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
        {tasks.length ? taskRows : <TasksEmptyState />}
      </div>
    </section>
  );
}

export default TasksWrapper;