import React from "react";

function Sobremi() {
  return (
    <div
      id="nosotros"
      className="relative bg-white overflow-hidden animate-fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl flex justify-center ">
                ¿Por qué escogernos?
              </h2>

              <p className="text-xl mx-5">
                Nos especializamos en el desarrollo de páginas web que no solo
                cumplen, sino que superan las expectativas de nuestros clientes.
                Nuestra experiencia en diseño UX/UI nos permite crear sitios web
                que no solo son visualmente atractivos, sino también altamente
                funcionales y fáciles de navegar. Nos diferenciamos por nuestro
                enfoque personalizado y colaborativo, donde cada proyecto es una
                oportunidad para crear una presencia en línea única y memorable
                para su negocio. Ya sea que esté lanzando una nueva marca o
                buscando mejorar su presencia digital actual, nuestro equipo
                dedicado está listo para convertir sus ideas en resultados
                tangibles y satisfactorios.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://i.postimg.cc/gjzTTyCY/pexels-divinetechygirl-1181449.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default Sobremi;
