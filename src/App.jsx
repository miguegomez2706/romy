import Header from "./components/Header";
import Carrusel from "./components/carrusel";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import InfoServicio from "./components/InfoServicio";

const slides = [
  "./img/img1.jpeg",
  "./img/img2.jpeg",
  "./img/img3.jpeg",
  "./img/img4.jpeg",
];

function App() {
  //investigar contex react
  //investigar react router dom
  return (
    <main className="App flex flex-col h-screen justify-between">
      <NavBar />
      <Carrusel autoSlideInterval={5000}>
        {slides.map((s) => (
          <img src={s} />
        ))}
      </Carrusel>
      <Header />
      <InfoServicio />
      {/* <Contacto /> */}
      <Footer />
    </main>
  );
}

export default App;
