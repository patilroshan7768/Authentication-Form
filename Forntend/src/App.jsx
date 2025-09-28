import { useState, useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // Check token from localStorage
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setMessage("Logged out successfully ✅");
  };

  if (token) {
    // Protected Dashboard page
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 text-center">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">Dashboard</h1>
          <p className="mb-6">Welcome! You are logged in ✅</p>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {message && <div className="mb-4 p-3 text-center bg-green-100 text-green-800 rounded-lg">{message}</div>}

        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg ${showLogin ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
            onClick={() => setShowLogin(true)}
          >Login</button>
          <button
            className={`px-4 py-2 rounded-lg ${!showLogin ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
            onClick={() => setShowLogin(false)}
          >Signup</button>
        </div>

        {showLogin ? <Login setMessage={setMessage} setToken={setToken} /> : <Signup setMessage={setMessage} />}
      </div>
    </div>
  );
}

export default App;
