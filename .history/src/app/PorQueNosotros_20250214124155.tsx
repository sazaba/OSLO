import { FaShieldAlt, FaClock, FaHeadset } from "react-icons/fa";

const PorQueNosotros = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-montserrat text-[#FFA700]">
          ¿Por qué Transportes Oslo?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-800 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 flex flex-col items-center text-center md:order-1 border border-[#FFA700]">
            <FaShieldAlt className="text-[#FFA700] text-7xl mb-6" />
            <h3 className="text-2xl font-bold mb-4">Resolvemos contingencias y emergencias</h3>
            <p className="text-gray-300">
              Contamos con personal capacitado en atención de emergencias y planes de contingencia.
              Además, garantizamos el cumplimiento de compromisos con la DIAN ante novedades en carretera.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 flex flex-col items-center text-center md:order-3 border border-[#FFA700]">
            <FaClock className="text-[#FFA700] text-7xl mb-6" />
            <h3 className="text-2xl font-bold mb-4">Minimizamos riesgos con seguimiento 24/7</h3>
            <p className="text-gray-300">
              Brindamos monitoreo en tiempo real, reportes detallados 24/7 y escoltas motorizados para
              mayor seguridad en cada operación logística.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 flex flex-col items-center text-center md:order-2 border border-[#FFA700]">
            <FaHeadset className="text-[#FFA700] text-7xl mb-6" />
            <h3 className="text-2xl font-bold mb-4">Soporte profesional en servicio al cliente</h3>
            <p className="text-gray-300">
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

