import Reviews from '../Reviews';

const CtaBanner = () => {
  return (
    <div className="cta-banner">
      <div className="cta-banner__container">
        <Reviews isFromPage classNames="reviews--transparent">
          <h3>Rated 4.8 Stars in Over 700 Reviews</h3>
          <p>Do I have a case?</p>
          <a href="/contact-us" className="button">
            Enquire Now
          </a>
        </Reviews>
      </div>
    </div>
  );
};

export default CtaBanner;
