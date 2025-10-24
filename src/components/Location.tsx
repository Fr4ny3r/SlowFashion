import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Encuéntranos
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ubicación Principal */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Flagship Store (Sede Principal)
            </h3>
            <p className="text-gray-700 mb-2">
              **Dirección:** Calle de la Moda, 123, Style City, Country.
            </p>
            <p className="text-gray-700 mb-4">
              **Horario:** Lunes a Sábado: 10:00 - 20:00.
            </p>
            <p className="text-gray-700">
              Visítanos para experimentar la colección completa y recibir asesoramiento personalizado de nuestro equipo de expertos en moda.
            </p>
          </div>

          {/* Mapa de Ubicación */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            {/* Puedes reemplazar el src con el código de inserción de Google Maps de tu ubicación */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.754371900366!2d-122.4194155846813!3d37.77492997975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580608c0e1815%3A0x6b772152862d29b0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1633512345678!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Mapa de la ubicación de la tienda F.Slow"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;