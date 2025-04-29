const TasksEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold">No tasks available</h2>
      <p className="mt-4 text-gray-500">Create a new task to get started.</p>
    </div>
  );
}

export default TasksEmptyState;