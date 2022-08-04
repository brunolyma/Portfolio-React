import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Nav/Navbar";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Services } from "./components/Services/Services";
import { Testimonials } from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
