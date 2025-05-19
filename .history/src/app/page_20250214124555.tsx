import Hero from "./Hero";
import Nav from "./Nav";
import PorQueNosotros from "./PorQueNosotros";
import Servicios from "./Servicios";

export default function Home() {
  return (
    <div>
      <main className="">
      
      <Hero/>
      <Servicios/>
      <PorQueNosotros/>
      </main>
    </div>
  );
}
