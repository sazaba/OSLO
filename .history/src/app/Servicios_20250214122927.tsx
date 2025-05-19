import Image from "next/image";
import Link from "next/link";
import bodega from '@/app/images/bodega.webp'
import primeramilla from '@/app/images/primeramilla.webp'
import ultimamilla from "@/app/images/ultimamilla.webp"
import acarreo from "@/app/images/acarreo.webp"
const Servicios = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-montserrat">
          Nuestros servicios
        </h2>
        <p className="text-center text-lg text-gray-700 mb-12 font-roboto">
  En Transportes Oslo ofrecemos soluciones logísticas personalizadas para ti, tu empresa y tus clientes.
</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Card 1: Almacenamiento */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-56">
              <Image
                src={bodega}
                alt="Almacenamiento"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2 font-montserrat">
                Almacenamiento
              </h3>
              <p className="text-gray-600 mb-4 font-roboto">
                Garantizamos un almacenamiento seguro en nuestras bodegas y una eficiente gestion de inventarios para el cumplimiento de tu promesa de entrega.
              </p>
              <div className="mt-auto">
                <Link
                  href="/servicios/almacenamiento"
                  className="inline-block bg-[#FFA700] text-black font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-[#CC0000] hover:text-white"
                >
                  Ver servicio
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Transporte masivo (primera milla) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-56">
              <Image
                src={primeramilla}
                alt="Transporte masivo (primera milla)"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2 font-montserrat">
                Transporte masivo (primera milla)
              </h3>
              <p className="text-gray-600 mb-4 font-roboto">
                Movilizamos grandes volúmenes de mercancía de manera eficiente, desde centros de producción hasta almacenes de distribución.
              </p>
              <div className="mt-auto">
                <Link
                  href="/servicios/transporte-masivo"
                  className="inline-block bg-[#FFA700] text-black font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-[#CC0000] hover:text-white"
                >
                  Ver servicio
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Transporte urbano (última milla) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-56">
              <Image
                src={ultimamilla}
                alt="Transporte urbano (última milla)"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2 font-montserrat">
                Transporte urbano (última milla)
              </h3>
              <p className="text-gray-600 mb-4 font-roboto">
                Entregamos paquetes y mercancías con puntualidad, seguimiento en tiempo real y seguridad en cada envío.
              </p>
              <div className="mt-auto">
                <Link
                  href="/servicios/transporte-urbano"
                  className="inline-block bg-[#FFA700] text-black font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-[#CC0000] hover:text-white"
                >
                  Ver servicio
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4: Acarreos */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-56">
              <Image
                src={acarreo}
                alt="Acarreos"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2 font-montserrat">
                Acarreos
              </h3>
              <p className="text-gray-600 mb-4 font-roboto">
                Servicio de transporte ágil para movimientos de carga liviana o pesada dentro de la ciudad y sus alrededores.
              </p>
              <div className="mt-auto">
                <Link
                  href="/servicios/acarreos"
                  className="inline-block bg-[#FFA700] text-black font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-[#CC0000] hover:text-white"
                >
                  Ver servicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
