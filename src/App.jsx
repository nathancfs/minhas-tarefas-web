import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("tasks"));
    if (Array.isArray(stored) && stored.length > 0) {
      return stored;
    }
    // Fallback se não tem nada válido
    return [
      {
        id: v4(),
        title: "Crie uma tarefa",
        description: "Descreva essa tarefa",
        isCompleted: false,
      },
    ];
  });
  /*
  Nesse cenario a lista persiste atraves da chamada de API
  Quanbdo o usario clicar em "Adicionar" uma nova tarefa, ela sera adicionada
  no Banco de Dados atraves de API e a lista sera atualizada e persistira no proximo
  carregamento da pagina. pois useEffect ira chamar a API novamente na primeira vez que a pagina for carregada.


  useEffect(() => {
    async function fetchTasks() {
      //Chamar API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" }
      );

      // Pegar os dados de API
      const data = await response.json();
      // Armazenar e Persistir
      setTasks(data);
    }
    fetchTasks();
  }, []);
  */

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Atualiza a  tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // Nao atualiza
      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500]px space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
