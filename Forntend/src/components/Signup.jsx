import { useState } from "react";
import { signupUser } from "../services/api";

function Signup({ setMessage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await signupUser(name, email, password);
      setMessage(res.data.message);
      setName(""); setEmail(""); setPassword("");
    } catch (error) {
      setMessage(error.response?.data.message || "Signup failed");
    }
  };

  return (
    <form className="space-y-4 p-6 bg-white rounded-lg shadow-md" onSubmit={handleSignup}>
      <h2 className="text-2xl font-bold text-center text-indigo-600">Signup</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
      <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">Signup</button>
    </form>
  );
}

export default Signup;
