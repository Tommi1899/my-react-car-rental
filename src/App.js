import React, { useState } from "react";
import Header from "./components/Header";
import CarList from "./components/CarList";
import About from "./components/About";
import Contact from "./components/Contact";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [modalData, setModalData] = useState(null);

  const openModal = (car) => setModalData(car);
  const closeModal = () => setModalData(null);

  return (
    <div className="App">
      <Header />
      <main>
        <section id="cars">
          <CarList openModal={openModal} />
        </section>
        <About />
        <Contact />
      </main>
      {modalData && <Modal car={modalData} closeModal={closeModal} />}
      <footer>© 2024 Аренда автомобилей. Все права защищены.</footer>
    </div>
  );
}

export default App;
