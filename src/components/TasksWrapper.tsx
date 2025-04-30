import {useMemo, useState} from "react";
import TaskRow from "./TaskRow.tsx";
import ActionButton from "./ActionButton.tsx";
import useTaskList from "../hooks/useTaskList.ts";
import TasksEmptyState from "./TasksEmptyState.tsx";
import {getTodaysDate} from "../utils/dates.ts";
import TaskModalForm from "./TaskModalForm.tsx";
import {AddEditTaskPayload, Task} from "../types";

const TasksWrapper = () => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const {
    tasks,
    toggleTaskCompleted,
    deleteTask,
    addTask,
    updateTask,
  } = useTaskList();

  const toggleTaskModal = () => setShowTaskModal(prev => !prev);
  const readableDate = useMemo((): string => getTodaysDate(), []);

  const handleTaskSubmission = (payload: AddEditTaskPayload) => {
    if (selectedTask) {
      updateTask(selectedTask.id, payload);
    } else {
      addTask(payload);
    }

    // Reset the form and close the modal
    setSelectedTask(null);
    toggleTaskModal();
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

        <ActionButton onClick={toggleTaskModal} label='Add Task' />
      </div>

      <div className="mt-8 min-h-[400px] max-h-[80vh] overflow-y-scroll">
        {tasks.length ? taskRows : <TasksEmptyState />}
      </div>

      <TaskModalForm
        isOpen={showTaskModal}
        task={selectedTask}
        onClose={toggleTaskModal}
        onSubmit={handleTaskSubmission}
      />
    </section>
  );
}

export default TasksWrapper;