import React from "react";
import "./Modal.css";

function Modal({ car, closeModal, onContinue }) {
  if (!car) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Вы выбрали автомобиль:</h2>
        <h3 className="car-name">{car.title}</h3> {/* Исправлено с car.name на car.title */}

        <p>
          <strong>Стоимость аренды:</strong> {car.price} руб/день
        </p>
        <button className="close-button" onClick={closeModal}>
          Закрыть
        </button>
        <button className="continue-button" onClick={onContinue}>
          Продолжить
        </button>
      </div>
    </div>
  );
}

export default Modal;
