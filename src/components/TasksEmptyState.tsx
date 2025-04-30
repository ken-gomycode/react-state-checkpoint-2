const TasksEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full pt-20">
      <p className="text-xl">No tasks available</p>
      <p className="mt-1 text-gray-500">Create a new task to get started.</p>
    </div>
  );
}

export default TasksEmptyState;