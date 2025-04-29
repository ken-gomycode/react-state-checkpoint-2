const TasksWrapper = () => {
  const readableDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <section className="bg-white w-2/5 p-8 h-[600px] rounded" >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>
        <p className="text-gray-500 text-sm mt-2">{readableDate}</p>
      </div>
    </section>
  );
}

export default TasksWrapper;