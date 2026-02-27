import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";
import "./NuevaPagina.css";

const client = generateClient<Schema>();

function NuevaPagina() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const { signOut } = useAuthenticator();

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  return (
    <div className="todos-wrapper">
      <div className="todos-container">
        <Link to="/" className="todos-btn-back">← Volver al inicio</Link>
        <h1 className="todos-title">My todos</h1>
        <button className="todos-btn-new" onClick={createTodo}>+ new</button>
        <ul className="todos-list">
          {todos.map((todo) => (
            <li className="todos-item" onClick={() => deleteTodo(todo.id)} key={todo.id}>
              {todo.content}
            </li>
          ))}
        </ul>
        <button className="todos-btn-signout" onClick={signOut}>Sign out</button>
        <div className="todos-info">
          🥳 App successfully hosted. Try creating a new todo.
          <br />
          <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
            Review next step of this tutorial.
          </a>
        </div>
      </div>
    </div>
  );
}

export default NuevaPagina;
