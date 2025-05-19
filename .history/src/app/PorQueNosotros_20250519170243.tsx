import { FaShieldAlt, FaClock, FaHeadset } from "react-icons/fa";

const PorQueNosotros = () => {
  return (
    <section
      id="por-que-nosotros"
      className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 font-montserrat text-[#FFA700]">
          ¿Por qué Transportes Oslo?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 flex flex-col items-center text-center md:order-1 border border-[#FFA700]">
            <FaShieldAlt className="text-[#FFA700] text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-bold mb-3 font-montserrat">
              Resolvemos contingencias y emergencias
            </h3>
            <p className="text-gray-300 text-sm sm:text-base font-roboto">
              Contamos con personal capacitado en atención de emergencias y planes de contingencia.
              Además, garantizamos el cumplimiento de compromisos ante novedades en carretera.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 flex flex-col items-center text-center md:order-3 border border-[#FFA700]">
            <FaClock className="text-[#FFA700] text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-bold mb-3 font-montserrat">
              Minimizamos riesgos con seguimiento 24/7
            </h3>
            <p className="text-gray-300 text-sm sm:text-base font-roboto">
              Brindamos monitoreo en tiempo real, reportes detallados 24/7 y escoltas motorizados para
              mayor seguridad en cada operación logística.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 flex flex-col items-center text-center md:order-2 border border-[#FFA700]">
            <FaHeadset className="text-[#FFA700] text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-bold mb-3 font-montserrat">
              Soporte profesional en servicio al cliente
            </h3>
            <p className="text-gray-300 text-sm sm:text-base font-roboto">
              Nuestro equipo está altamente capacitado en atención al cliente, gestión de riesgos y
              soluciones logísticas. Respondemos de manera oportuna y efectiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueNosotros;
