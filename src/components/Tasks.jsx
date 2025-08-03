import { CheckIcon, ChevronRight, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Bottom";

function Tasks({ tasks, onTaskClick, onDeleteTask }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/tasks?${query.toString()}`);
  }

  return (
    <ul className="space-y-2 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md text-left hover:bg-blue-600 ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              {task.isCompleted && <CheckIcon className="shrink-0" />}
              <span className="truncate">{task.title}</span>
            </div>
          </button>
          <Button
            onClick={() => onSeeDetailsClick(task)}
            //className="bg-slate-400 p-2 rounded-md text-white"
          >
            <ChevronRight />
          </Button>
          <Button
            onClick={() => onDeleteTask(task.id)}
            //className="bg-slate-400 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
