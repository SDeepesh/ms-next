import ReviewsIo from '../ReviewsIo';

const Reviews = ({ classNames = '', children, isFromPage = false }) => {
  return (
    <div className={`reviews__container ${classNames}`}>
      <div className="reviews__stars" />
      {children}
      <ReviewsIo />
      {!isFromPage && (
        <p>
          Our many <strong>5 star reviews</strong> are testament to our proven track <br />
          record in negotiating high value settlements
        </p>
      )}
    </div>
  );
};

export default Reviews;
