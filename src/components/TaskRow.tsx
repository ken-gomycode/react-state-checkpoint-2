import {FC} from "react";
import {Task} from "../types";

type Props = {
  task: Task,
  toggleCompleted: (id: string) => void,
  deleteTask: (id: string) => void,
}

const TaskRow: FC<Props> = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-4"
          checked={task.completed}
          onChange={() => toggleCompleted(task.id)}
        />
        <div className="text-left">
          <p className={`text-lg ${task.completed ? "line-through text-gray-400" : ""}`}>
            {task.title}
          </p>
          {!task.completed && (<p className={`text-gray-500 text-sm`}>{task.description}</p>)}
        </div>
      </div>
      <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">Delete</button>
    </div>
  )
}

export default TaskRow;