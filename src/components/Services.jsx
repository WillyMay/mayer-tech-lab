import React from "react";

function Services() {
  return (
    <section id="servicios" className="feature__section animate-fade-up">
      <div className="max-w-5xl px-7 lg:px-10 py-10 mx-auto">
        <div className="flex flex-col gap-y-3">
          <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-lg font-bold text-zinc-800">
            ¿Que servicios ofrecemos?
          </h2>
        </div>
        <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer">
            <div className="flex flex-col gap-y-2.5 items-center">
              <img
                className="w-20"
                src="https://i.postimg.cc/vZhk5Nk0/shopping-bag-24dp-FILL0-wght400-GRAD0-opsz24.png"
                alt="landing page icon"
              />
              <h3 className="text-2xl font-bold">One page</h3>
              <ul className="list-disc mx-4">
                <li className="my-2">Enfocada en un solo producto o servicio</li>
                <li className="my-2">
                  1 Pestaña
                </li>
                <li className="my-2">
                  Encriptacion de Seguridad{" "}
                  <span className="font-bold">SSL</span>
                </li>
                <li className="my-2">Botón a WhatsApp</li>
                <li className="my-2">Posicionamiento <span className="font-bold">SEO</span></li>
                <li>Llamado al acción</li>
              </ul>
            </div>
            <div className="cotizacion flex justify-center py-2">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="https://wa.link/5q8myl"><p>Solicitar cotización</p></a>
              </button>
            </div>
          </div>
          <div className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer">
            <div className="flex flex-col gap-y-2.5 items-center">
              <img
                className="w-20"
                src="https://i.postimg.cc/K8Gsc5jB/co-present-24dp-FILL0-wght400-GRAD0-opsz24.png"
                alt="website icon"
              />
              <h3 className="text-2xl font-bold">Sitio Web</h3>
              <ul className="list-disc mx-4">
                <li className="my-2">2GB de almacenamiento</li>
                <li className="my-2">2 Cambios mensuales</li>
                <li className="my-2">3-5 Pestañas</li>
                <li className="my-2">Email empresarial gratis</li>
                <li className="my-2">
                  Encriptacion de Seguridad{" "}
                  <span className="font-bold">SSL</span>
                </li>
                <li className="my-2">Botón a WhatsApp</li>
                <li className="my-2">Posicionamiento <span className="font-bold">SEO</span></li>
                <li>Llamado al acción</li>
              </ul>
            </div>
            <div className="cotizacion flex justify-center py-2">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="https://wa.link/5q8myl"><p>Solicitar cotización</p></a>
              </button>
            </div>
          </div>
          <div className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer">
            <div className="flex flex-col gap-y-2.5 items-center">
              <img
                className="w-20"
                src="https://i.postimg.cc/9Ftnjkmc/store-24dp-FILL0-wght400-GRAD0-opsz24.png"
                alt="ecommerce icon"
              />
              <h3 className="text-2xl font-bold">Tienda Virtual</h3>
              <ul className="list-disc mx-4">
                <li className="my-2">4GB de Almacenamiento</li>
                <li className="my-2">4 Cambios mensuales</li>
                <li className="my-2">5-8 Pestañas</li>
                <li className="my-2">Carrito virtual</li>
                <li className="my-2">Conexion a Webpay</li>
                <li className="my-2">Email empresarial gratis</li>
                <li className="my-2">
                  Encriptacion de Seguridad{" "}
                  <span className="font-bold">SSL</span>
                </li>
                <li className="my-2">Botón a WhatsApp</li>
                <li className="my-2">Posicionamiento <span className="font-bold">SEO</span></li>
                <li>Llamado al acción</li>
              </ul>
            </div>
            <div className="cotizacion flex justify-center py-2">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="https://wa.link/5q8myl"><p>Solicitar cotización</p></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
