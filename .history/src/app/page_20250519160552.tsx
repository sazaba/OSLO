import Hero from "./Hero";
import Nav from "./Nav";
import PorQueNosotros from "./PorQueNosotros";
import Servicios from "./Servicios";

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <section id="top">
          <Hero />
        </section>
        <section id="servicios">
          <Servicios />
        </section>
        <section id="por-que-nosotros">
          <PorQueNosotros />
        </section>
      </main>
    </div>
  );
}
