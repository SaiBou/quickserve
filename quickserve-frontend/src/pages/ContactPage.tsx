import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-2">Contactez-nous</h1>
      <p className="text-center text-gray-500 mb-10">
        Notre équipe est à votre disposition pour répondre à toutes vos questions.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Formulaire */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-semibold">Envoyez-nous un message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                placeholder="Votre nom"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="votre@email.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Votre message..."
                className="w-full border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Infos de contact */}
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Nos Coordonnées</h3>
            <p className="flex items-center text-sm mb-2">📧 contact@quickserve.com</p>
            <p className="flex items-center text-sm mb-2">📞 +33 1 23 45 67 89</p>
            <p className="flex items-center text-sm">📍 123 Rue de la Paix, 75000 Paris</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Horaires d'ouverture</h3>
            <p className="text-sm mb-1">Lundi - Vendredi : 9h - 18h</p>
            <p className="text-sm mb-1">Samedi : 10h - 16h</p>
            <p className="text-sm">Dimanche : Fermé</p>
          </div>
        </div>
      </div>
    </div>
  );
}
