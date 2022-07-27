import sanitizeHTML from '../../../utils/sanitiseHTML';

const TopThreeTips = ({ tips }) => {
  return (
    <div className="section__top-three-tips">
      <div className="section__top-three-tips__header">
        <img
          className="section__top-three-tips__header__img"
          src="/images/alex-top-three-tips.jpeg"
          alt="Alex Monaco"
        />
        <div className="section__top-three-tips__header__title">
          <h3>Top Tips</h3>
          <p>Alex Monaco</p>
        </div>
      </div>

      <div className="section__top-three-tips__list">
        <ol>
          {tips.map((tip) => (
            <li dangerouslySetInnerHTML={{ __html: `${sanitizeHTML(tip.tipText)}` }} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TopThreeTips;
