import React, { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //console.log({ title, description });

  return (
    <div className="space-y-2 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digita o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa "
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // Verifica se o título e a descrição não estão vazios
          if (!title.trim() || !description.trim()) {
            alert("Por favor, preencha o título e a descrição da tarefa.");
            return;
          }
          onAddTaskSubmit(title, description), setTitle(""), setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium  hover:bg-blue-600"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
