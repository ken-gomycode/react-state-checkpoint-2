import {useEffect, useMemo, useState} from "react";
import {AddEditTaskPayload, Task} from "../types";
import ActionButton from "./ActionButton.tsx";

type TaskModalFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (payload: AddEditTaskPayload) => void;
  task: Task | null
};

const TaskModalForm = ({ isOpen, onClose, onSubmit, task }: TaskModalFormProps) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const handleSubmit = () => {
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  const allowSubmit = useMemo(() => {
    return title.length > 0 && title.length <= 50 && description.length <= 200;
  }, [title, description]);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [task]);

  if (!isOpen) return null;

  return (
    <div style={{ background: 'rgba(0,0,0,0.5)' }} className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-10 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">
          {task ? "Edit Task" : "Add New Task"}
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1 text-left block pb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-3"
            placeholder="Enter task title"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1 text-left block pb-1">Description (Optional)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter task description"
            rows={8}
          />
        </div>

        <div className="flex justify-between items-center" >
          <button onClick={onClose} >Cancel</button>
          <ActionButton disabled={!allowSubmit} onClick={handleSubmit} label={'Continue'} />
        </div>
      </div>
    </div>
  );
};

export default TaskModalForm;