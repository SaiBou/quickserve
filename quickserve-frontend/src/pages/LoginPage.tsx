import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axiosInstance";

const API_URL = import.meta.env.VITE_API_URL;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      console.log(res.data);
      setMessage(`Bienvenue, ${res.data.nom ? res.data.nom : res.data.email}`);
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Erreur lors de la connexion");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-2">Connexion</h2>
        <p className="text-center text-gray-500 mb-6">Accédez à votre compte</p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="input w-full border px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="input w-full border px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn bg-green-500 text-white w-full hover:bg-green-600 py-2">
            Se connecter
          </button>
        </form>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}

        <p className="text-center text-sm text-gray-600 mt-6">
          Pas encore de compte ?{" "}
          <Link to="/register" className="text-green-500 hover:underline">
            S’inscrire
          </Link>
        </p>
      </div>
    </div>
  );
}
