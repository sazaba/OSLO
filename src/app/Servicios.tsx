import Image from "next/image";
import bodega from "@/app/images/bodega.webp";
import primeramilla from "@/app/images/primeramilla.webp";
import ultimamilla from "@/app/images/ultimamilla.webp";
import acarreo from "@/app/images/acarreo.webp";

const Servicios = () => {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=573015207556&text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios!";

  return (
    <section id="servicios" className="py-16 sm:py-20 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-montserrat">
          Nuestros servicios
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-700 mb-10 sm:mb-12 font-roboto">
          En Transportes Oslo ofrecemos soluciones logísticas personalizadas para ti, tu empresa y tus clientes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 sm:h-56">
              <Image src={bodega} alt="Almacenamiento" fill className="object-cover" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 font-montserrat">Almacenamiento</h3>
              <p className="text-gray-600 mb-4 font-roboto text-sm sm:text-base">
                Garantizamos un almacenamiento seguro en nuestras bodegas y una eficiente gestión de inventarios para el cumplimiento de tu promesa de entrega.
              </p>
              <div className="mt-auto">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FFA700] text-black font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-[#CC0000] hover:text-white text-sm sm:text-base"
                >
                  Consultar servicio
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 sm:h-56">
              <Image src={primeramilla} alt="Primera milla" fill className="object-cover" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 font-montserrat">Transporte masivo (primera milla)</h3>
              <p className="text-gray-600 mb-4 font-roboto text-sm sm:text-base">
                Movilizamos grandes volúmenes de mercancía de manera eficiente, desde centros de producción hasta almacenes de distribución.
              </p>
              <div className="mt-auto">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FFA700] text-black font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-[#CC0000] hover:text-white text-sm sm:text-base"
                >
                  Consultar servicio
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 sm:h-56">
              <Image src={ultimamilla} alt="Última milla" fill className="object-cover" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 font-montserrat">Transporte urbano (última milla)</h3>
              <p className="text-gray-600 mb-4 font-roboto text-sm sm:text-base">
                Entregamos paquetes y mercancías con puntualidad, seguimiento en tiempo real y seguridad en cada envío.
              </p>
              <div className="mt-auto">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FFA700] text-black font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-[#CC0000] hover:text-white text-sm sm:text-base"
                >
                  Consultar servicio
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 sm:h-56">
              <Image src={acarreo} alt="Acarreos" fill className="object-cover" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 font-montserrat">Acarreos</h3>
              <p className="text-gray-600 mb-4 font-roboto text-sm sm:text-base">
                Servicio de transporte ágil para movimientos de carga liviana o pesada dentro de la ciudad y sus alrededores.
              </p>
              <div className="mt-auto">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FFA700] text-black font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-[#CC0000] hover:text-white text-sm sm:text-base"
                >
                  Consultar servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
