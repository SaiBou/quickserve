import React, { useState } from "react";

const faqs = [
  {
    question: "Comment fonctionne QuickServe ?",
    answer: "",
  },
  {
    question: "Quels types de services proposez-vous ?",
    answer:
      "Nous proposons une large gamme de services incluant le transport de colis, le déménagement, le nettoyage, et le dépannage. Chaque service est assuré par des professionnels qualifiés.",
  },
  {
    question: "Comment sont sélectionnés les prestataires ?",
    answer: "",
  },
  {
    question: "Comment puis-je payer ?",
    answer: "",
  },
  {
    question: "Que faire en cas de problème ?",
    answer: "",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-2">Foire Aux Questions</h1>
      <p className="text-center text-gray-500 mb-8">
        Trouvez rapidement les réponses à vos questions.
      </p>

      <div className="mb-10">
        <input
          type="text"
          placeholder="Rechercher une question..."
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="divide-y divide-gray-200">
        {faqs.map((item, index) => (
          <div key={index} className="py-4 cursor-pointer" onClick={() => toggle(index)}>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{item.question}</h3>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </div>
            {openIndex === index && item.answer && (
              <p className="text-gray-600 mt-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
