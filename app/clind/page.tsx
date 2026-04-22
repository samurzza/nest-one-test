"use client";
import { useState } from "react";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [title, setTitle] = useState("azoz");
  const [todo, setTodo] = useState<TodoType[]>([]);

  function ching() {
    setTitle("hello world");
  }

  async function handleAdd() {
    const respons = await fetch(
      "https://jsonplaceholder.typicode.com/todos",{
        next:{
            revalidate: 60
        }
      }
    );
    const data: TodoType[] = await respons.json();
    setTodo(data);
  }

  const contensst = todo.map((e) => (
    <div key={e.id} className="bg-amber-50 p-3 m-5">
      <h1>{e.title}</h1>
      <p>ID is : {e.id}</p>
      <p>completed or not : {e.completed.toString()}</p>
    </div>
  ));

  return (
    <>
      <h1>{title}</h1>

      <button onClick={ching} className="w-xl p-5 cursor-pointer hover:bg-blue-500 bg-blue-300 transition-all">change</button>

      <button onClick={handleAdd} className="w-xl p-5 cursor-pointer hover:bg-blue-500 bg-blue-300 transition-all">add</button>

      <div>{contensst}</div>
    </>
  );
}