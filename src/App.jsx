import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100  flex flex-col items-center py-8">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Learn Redux Toolkit</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Manage your todos efficiently with Redux Toolkit.
        </p>
      </header>

      {/* Add Todo Component */}
      <AddTodo />

      {/* Todos List Component */}
      <div className="mt-8 w-full max-w-2xl">
        <Todos />
      </div>
    </div>
  );
}

export default App;
