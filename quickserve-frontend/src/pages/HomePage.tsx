import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Section Hero en plein écran */}
      <section className="bg-gradient-to-br from-green-100 via-white to-green-100 flex-grow text-center py-24 w-full">
        <p className="text-green-600 text-sm mb-4">Votre service en un clic</p>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Simplifiez votre quotidien<br />
          avec <span className="text-green-500">QuickServe</span>
        </h1>

        <p className="text-gray-600 text-base mb-10">
          Transport, déménagement, nettoyage, dépannage & accompagnement — tous vos services, rapidement et en toute sécurité.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded shadow">
            Réserver Maintenant
          </button>
          <button className="bg-white border px-6 py-3 rounded shadow hover:bg-gray-100">
            En savoir plus
          </button>
        </div>
      </section>

      {/* Section Services */}
      <section className="bg-white w-full py-16">
        <div className="text-center mb-10">
          <p className="text-green-600 text-sm mb-2">Nos Services</p>
          <h2 className="text-2xl font-bold">Des solutions pour tous vos besoins</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-16">
          <div className="bg-gray-50 rounded-lg p-6 text-center shadow">
            <div className="text-4xl mb-2">🚚</div>
            <p className="font-semibold">Transport de colis</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center shadow">
            <div className="text-4xl mb-2">🏠</div>
            <p className="font-semibold">Déménagement</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center shadow">
            <div className="text-4xl mb-2">🪜</div>
            <p className="font-semibold">Nettoyage</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center shadow">
            <div className="text-4xl mb-2">🔧</div>
            <p className="font-semibold">Dépannage</p>
          </div>
        </div>
      </section>
    </div>
  );
}
