import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="w-full bg-white shadow">
      <nav className="w-full flex justify-between items-center px-8 py-4">
        <Link to="/" className="text-xl font-bold text-green-600">
          QuickServe
        </Link>
        <ul className="flex gap-6 text-sm">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded">
              Connexion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
