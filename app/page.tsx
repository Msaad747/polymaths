import Hero from "./component/Hero";
import Axioms from "./component/Axioms";
import WhatWeDo from "./component/WhatWeDo";
import Projects from "./component/Projects";
import ScrollToTop from "./component/ScrollToTop";

export default function Home() {


  return (
    <main>
      <Hero />
      <Axioms/>
      <WhatWeDo/>
      <Projects/>
      <ScrollToTop/>
    </main>
  );
}