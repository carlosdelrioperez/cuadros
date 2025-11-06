export default function Hero() {
  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.getElementById("galeria");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex flex-col items-center justify-center text-center bg-gray-950 text-white overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/Imagen de WhatsApp 2025-11-06 a las 23.01.37_06d6ec92.jpg"
          alt="Cuadro de Sevilla"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight">
          Ángela Ríos
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Descubre una colección única de cuadros que capturan emociones,
          colores y momentos irrepetibles.
        </p>
        <button
          onClick={handleScroll}
          className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
        >
          Explorar Galería
        </button>
      </div>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}
