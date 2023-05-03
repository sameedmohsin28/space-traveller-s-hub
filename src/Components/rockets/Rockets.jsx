import React from 'react';
import { useSelector } from 'react-redux';
import ArticleComponent from './RocketsArticle';
import '../../styles/Rockets.css';

const Rockets = () => {
  const stateData = useSelector((store) => (store.reservationListKey.reservationList));

  return (
    <section className="reservation-wrapper">
      {
        stateData.map((article) => (
          <ArticleComponent
            key={article.id}
            articleData={article}
          />
        ))
      }
    </section>
  );
};

export default Rockets;
