import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance";

const API_URL = import.meta.env.VITE_API_URL;

export default function RegisterPage() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/register`, {
        nom,
        email,
        password,
      });
      setMessage("Inscription réussie !");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Erreur lors de l'inscription");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Créer un compte</h2>
        <p className="text-center text-gray-500 mb-6">Inscrivez-vous pour commencer</p>

        <form className="space-y-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nom"
            className="input w-full border px-3 py-2"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
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

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
          >
            S'inscrire
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}

        <p className="mt-4 text-center text-sm">
          Déjà inscrit ?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
