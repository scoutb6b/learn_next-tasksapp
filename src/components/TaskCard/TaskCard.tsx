import { TaskDocument } from "@/models/task";
import TaskDelBtn from "./TaskDelBtn/TaskDelBtn";
import TaskEditBtn from "./TaskEditBtn/TaskEditBtn";

interface TaskCardProps {
  task: TaskDocument;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="w-64 h-52 p-4 bg-gray-200 rounded-md shadow-md flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold">{task.title}</h1>
        <div className="mt-1 text-sm line-clamp-3">{task.description}</div>
      </header>
      <div>
        <div className="text-sm">{task.dueDate}</div>
        <div className="flex justify-between items-center">
          <div
            className={`mt-1 text-sm px-1 py-1 w-20 text-center text-white rounded-full shadow-sm ${
              task.isCompleted ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {task.isCompleted ? "完了" : "未完了"}
          </div>
          <div className="flex gap-4">
            <TaskEditBtn id={task._id} />
            <TaskDelBtn id={task._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
