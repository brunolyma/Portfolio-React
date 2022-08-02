import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Nav/Navbar";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Services } from "./components/Services/Services";
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
