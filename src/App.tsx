import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Testmonials } from "./components/Testmonials";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testmonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
