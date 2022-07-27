const Prices = ({ feesNotes, title, subTitle, children }) => {
  return (
    <div className="fees__container">
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <div className="fees-cards">
        {feesNotes.map(({ image, heading, paragraph }) => {
          return (
            <div className="fee-card">
              <div className="fee-card__image" data-bg={image} />
              <h3>{heading}</h3>
              <p>{paragraph}</p>
            </div>
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default Prices;
