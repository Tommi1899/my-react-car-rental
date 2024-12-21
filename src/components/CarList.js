import React from "react";
import "./CarList.css";

function CarList({ openModal }) {
  const cars = [
  { id: 1, title: "Mercedes Benz GLE 2020", price: "19 500р.", image1: "images/gle_1.jpg", image2: "images/gle_2.jpg" },
  { id: 2, title: "Mercedes G350D BRABUS", price: "15 900р.", image1: "images/G350D_1.jpg", image2: "images/G350D_2.jpg" },
  { id: 3, title: "BMW 520d G30", price: "9 800р.", image1: "images/BMW520d_1.jpg", image2: "images/BMW520d_2.jpg"},
  { id: 4, title: "Mercedes-Benz E200 Brabus", price: "8 700р.", image1: "images/E200Brabus_1.jpg", image2: "images/E200Brabus_2.jpg"},
  { id: 5, title: "Kia K5", price: "6 500р.", image1: "images/KiaK5_1.jpg", image2: "images/KiaK5_2.jpg"},
  { id: 6, title: "Hyundai Solaris", price: "3 000р.", image1: "images/Solaris_1.jpg", image2: "images/Solaris_2.jpg"},
  { id: 7, title: "Kia Rio", price: "3 200р.р.", image1: "images/KiaRio_1.jpg", image2: "images/KiaRio_2.jpg"},
  { id: 8, title: "Geely Atlas Boyce L", price: "7 200р.", image1: "images/AtlasBoyceL_1.jpg", image2: "images/AtlasBoyceL_2.jpg"},
  { id: 9, title: "Geely ATLAS PRO", price: "6 000р.", image1: "images/ATLASPRO_1.jpg", image2: "images/ATLASPRO_2.jpg"},
  { id: 10, title: "Lada Granta", price: "2 500р.", image1: "images/Granta_1.jpg", image2: "images/Granta_2.jpg"},
  { id: 11, title: "KIA Sportage", price: "5 500р.", image1: "images/KIASportage_1.jpg", image2: "images/KIASportage_2.jpg"},
  { id: 12, title: "Lexus ES250", price: "5 600р.", image1: "images/lexus_es250_1.jpg", image2: "images/lexus_es250_2.jpg"},
  { id: 13, title: "Toyota Land Cruiser 200", price: "13 000р.", image1: "images/landcruiser200_1.jpg", image2: "images/landcruiser200_2.jpg"},
  { id: 14, title: "Nissan Patrol", price: "12 000р.", image1: "images/nissanpatrol_1.jpg", image2: "images/nissanpatrol_2.jpg"},
  { id: 15, title: "Geely Coolray", price: "5 000р.", image1: "images/GeelyCoolray_1.jpg", image2: "images/GeelyCoolray_2.jpg"},
];

console.log("CarList rendered with cars:", cars);

return (
  <div className="car-list">
    {cars.map((car) => (
      <div className="car-card" key={car.id}>
        <img 
          src={car.image1} 
          alt={car.title} 
          className="car-image" 
          onMouseEnter={(e) => (e.currentTarget.src = car.image2)} 
          onMouseLeave={(e) => (e.currentTarget.src = car.image1)} 
        />
        <h3>{car.title}</h3>
        <p>Цена: {car.price} руб/день</p>
        <button onClick={() => openModal(car)}>Забронировать</button>
      </div>
    ))}
  </div>
);



}

export default CarList;