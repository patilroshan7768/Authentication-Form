import { useState } from "react";
import { loginUser } from "../services/api";

function Login({ setMessage, setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(email, password);
      setMessage(res.data.message + " ✅ Token created!");
      localStorage.setItem("token", res.data.token); // Store token
      setToken(res.data.token); // Update App.jsx state
      setEmail(""); setPassword("");
    } catch (error) {
      setMessage(error.response?.data.message || "Login failed");
    }
  };

  return (
    <form className="space-y-4 p-6 bg-white rounded-lg shadow-md" onSubmit={handleLogin}>
      <h2 className="text-2xl font-bold text-center text-indigo-600">Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
      <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">Login</button>
    </form>
  );
}

export default Login;
