import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import { addReservation, cancelReservation } from '../../Redux/rockets/rocketsSlice';
import '../../styles/RocketArticle.css';

const ArticleComponent = ({ articleData }) => {
  const dispatch = useDispatch();
  const reserveHandler = (id) => {
    dispatch(addReservation(id));
  };
  const cancelHandler = (id) => {
    dispatch(cancelReservation(id));
  };
  return (
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
          {articleData.reserved && (
            <h2>Reserved available</h2>
          )}
          {articleData.description}
        </p>
        <button
          className="article-button"
          type="button"
          onClick={
            articleData.reserved
              ? () => cancelHandler(articleData.id)
              : () => reserveHandler(articleData.id)
            }
        >
          {articleData.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>

      </div>
    </article>
  );
};

ArticleComponent.propTypes = {
  articleData: PropTypes.shape(
    {
      flickrImages: PropTypes.arrayOf(string).isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.oneOfType([undefined, PropTypes.bool]),
    },
  ).isRequired,
};
export default ArticleComponent;
