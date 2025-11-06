import React, { useState } from "react";
import { ZoomIn } from "lucide-react";

export default function Gallery() {
  const artworks = [
    {
      id: 1,
      src: "/cerdo.jpg",
      title: "Atardecer en calma",
      price: "250 €",
      description:
        "Una obra que captura la serenidad del ocaso, donde los tonos cálidos se funden con la quietud del paisaje.",
    },
    {
      id: 2,
      src: "/conejo.jpg",
      title: "Sombras del tiempo",
      price: "300 €",
      description:
        "Explora el paso del tiempo a través de contrastes sutiles y texturas profundas.",
    },
    {
      id: 3,
      src: "/escultura.jpg",
      title: "Reflejos de la memoria",
      price: "280 €",
      description:
        "Una mirada introspectiva a los recuerdos y su reflejo en la naturaleza del ser.",
    },
    {
      id: 4,
      src: "/esculturaconejo.jpg",
      title: "El eco del color",
      price: "320 €",
      description:
        "Colores vibrantes que resuenan con energía, capturando el movimiento del alma.",
    },
    {
      id: 5,
      src: "/flor.jpg",
      title: "Luz interior",
      price: "260 €",
      description:
        "Una representación del brillo que habita en lo más profundo de cada uno de nosotros.",
    },
    {
      id: 6,
      src: "/gorda.jpg",
      title: "Horizonte perdido",
      price: "290 €",
      description:
        "Una invitación a explorar lo desconocido, donde el horizonte se convierte en una metáfora de la esperanza.",
    },
    {
      id: 7,
      src: "/loca.jpg",
      title: "Horizonte perdido",
      price: "290 €",
      description:
        "Una invitación a explorar lo desconocido, donde el horizonte se convierte en una metáfora de la esperanza.",
    },
    {
      id: 8,
      src: "/loco.jpg",
      title: "Horizonte perdido",
      price: "290 €",
      description:
        "Una invitación a explorar lo desconocido, donde el horizonte se convierte en una metáfora de la esperanza.",
    },
    {
      id: 9,
      src: "/malito.jpg",
      title: "Horizonte perdido",
      price: "290 €",
      description:
        "Una invitación a explorar lo desconocido, donde el horizonte se convierte en una metáfora de la esperanza.",
    },
    {
      id: 10,
      src: "/miedo.jpg",
      title: "Horizonte perdido",
      price: "290 €",
      description:
        "Una invitación a explorar lo desconocido, donde el horizonte se convierte en una metáfora de la esperanza.",
    },
    {
      id: 11,
      src: "/pie.jpg",
      title: "Horizonte perdido",
      price: "290 €",
      description:
        "Una invitación a explorar lo desconocido, donde el horizonte se convierte en una metáfora de la esperanza.",
    },
    {
      id: 12,
      src: "/tetas.jpg",
      title: "Horizonte perdido",
      price: "290 €",
      description:
        "Una invitación a explorar lo desconocido, donde el horizonte se convierte en una metáfora de la esperanza.",
    },
    {
      id: 13,
      src: "/vieja.jpg",
      title: "Horizonte perdido",
      price: "290 €",
      description:
        "Una invitación a explorar lo desconocido, donde el horizonte se convierte en una metáfora de la esperanza.",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section
      id="galeria"
      className="bg-gray-50 text-gray-900 py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-serif mb-4">Galería</h2>
        <p className="text-lg text-gray-600">
          Una selección de obras que reflejan mi visión del arte y la belleza en
          cada trazo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((art) => (
          <div
            key={art.id}
            className="group relative overflow-hidden rounded-xl shadow-md bg-white cursor-pointer"
            onClick={() => setSelected(art)}
          >
            <img
              src={art.src}
              alt={art.title}
              className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center space-y-3">
              <ZoomIn size={36} className="text-white opacity-90" />
              <span className="text-white text-lg font-medium">
                {art.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-w-4xl w-full relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-1/2">
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full h-80 md:h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center md:w-1/2">
              <h3 className="text-3xl font-serif mb-4">{selected.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {selected.description}
              </p>
              <p className="text-xl font-semibold text-gray-900 mb-8">
                {selected.price}
              </p>
              <button
                className="self-start bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
                onClick={() => setSelected(null)}
              >
                Cerrar
              </button>
            </div>

            <button
              className="absolute top-4 right-5 text-gray-500 text-3xl font-light hover:text-gray-700"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
