import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  function onBackClick() {
    navigate(-1);
  }
  const [serachParams] = useSearchParams();
  const title = serachParams.get("title");
  const description = serachParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500]px space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={onBackClick}
            className="absolute left-0 top-0 bottom-0 p-2 bg-slate-400 rounded-md text-white "
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-white font-bold text-slate-600">
            {title}
          </h2>
          <p className="text-white text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
