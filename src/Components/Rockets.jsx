import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Rockets.css';

const Rockets = () => {
  const storedData = useSelector((store) => (store.reducer.reservationList));
  return (
    <section className="reservation-wrapper">
      <article>
        <h2>Rocket data will be dispalyed </h2>
      </article>
    </section>
  );
};

export default Rockets;
