import type { NextPage } from "next";
import Link from "next/link";
import { todo } from "node:test";

const getAllTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await response.json();
  return data;
};

const TodosPage = async () => {
  const todos = await getAllTodos();

  return (
    <div className="p-4">
      <h3 className="p-3 text-black text-xl">Todos</h3>
      <div className="grid grid-cols-3 gap-2 ">
        {todos &&
          Array.isArray(todos) &&
          todos.map((todo: any) => (
            <div key={todo.id}>
              <h4 className="border p-3 shadow font-bold">
                {todo.title.charAt(0).toUpperCase() + todo.title.slice(1)}
              </h4>

              <h3>
                <Link href={`/dashboard/todos/test/${todo.userId}`}>
                  {todo.userId}
                </Link>
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodosPage;
