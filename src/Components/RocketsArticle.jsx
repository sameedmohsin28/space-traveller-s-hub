import React from 'react';
import PropTypes, { string } from 'prop-types';
import '../styles/RocketArticle.css';

const ArticleComponent = ({ articleData }) => (
  <>
    <article id={articleData.id}>
      <div className="img-container">
        <img
          className="article-img"
          src={articleData.flickrImages[0]}
          alt={articleData.name}
        />
      </div>
      <div className="details-container">
        <h2 className="article-title">
          {articleData.name}
        </h2>
        <p className="article-description">
          {articleData.description}
        </p>
        <button className="article-button" type="button">Reserve Rocket</button>
      </div>
    </article>
  </>
);

ArticleComponent.propTypes = {
  articleData: PropTypes.shape(
    {
      flickrImages: PropTypes.arrayOf(string).isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    },
  ).isRequired,
};
export default ArticleComponent;
