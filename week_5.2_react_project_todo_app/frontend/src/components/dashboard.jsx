import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  let params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTodos, setAllTodos] = useState(null);
  const [updatingTodo, setUpdatingTodo] = useState(false);
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [todoId, setTodoId] = useState("");
  const [token, setToken] = useState(localStorage.getItem("authToken"));

  // Redirect to signin if no token
  useEffect(() => {
    if (!token) {
      console.log("No token, redirecting to sign-in...");
      navigate("/signin");
    }
  }, [token, navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
    navigate("/signin");
  };

  // Fetch all todos
  async function getTodos() {
    try {
      const response = await axios.get("http://localhost:3000/todos", {
        headers: { Authorization: `${token}` },
      });
      setAllTodos(response.data.data);
    } catch (error) {
      console.error("Error fetching todos", error);
    }
  }

  useEffect(() => {
    if (token) {
      getTodos();
    }
  }, [token, updatingTodo]);

  // Submit new todo
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/todo",
        { title, description },
        { headers: { Authorization: `${token}` } }
      );
      setAllTodos([...allTodos, { title, description }]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding todo", error);
    }
  }

  // Update todos
  async function updateTodos(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/updateTodos/${todoId}`, {
        title: updateTitle,
        description: updateDescription,
      });
      setUpdatingTodo(false);
      getTodos();
    } catch (error) {
      console.error("Error updating todo", error);
    }
  }

  return (
    <div>
      {/* Logout Button */}
      <button onClick={handleLogout}>Logout</button>

      <h2>Enter the Todo</h2>
      <form onSubmit={submitHandler}>
        <div>Enter the Title</div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the Title"
        />
        <div>Enter the Description</div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter the Description"
        />
        <br />
        <button type="submit">Add a Todo</button>
      </form>

      {/* Update Form */}
      {updatingTodo && (
        <div>
          <form onSubmit={updateTodos}>
            <input
              type="text"
              placeholder="Enter updated title"
              value={updateTitle}
              onChange={(e) => setUpdateTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter updated description"
              value={updateDescription}
              onChange={(e) => setUpdateDescription(e.target.value)}
            />
            <button type="submit">Update Todos</button>
          </form>
        </div>
      )}

      <h2>All Todos</h2>
      {allTodos &&
        allTodos.map((todo, index) => (
          <div key={todo._id}>
            <h2>TODO {index + 1}</h2>
            <button
              onClick={() => {
                setUpdatingTodo(true);
                setTodoId(todo._id);
              }}
            >
              Update todo
            </button>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
          </div>
        ))}
    </div>
  );
}
