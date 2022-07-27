import sanitizeHTML from '../../../utils/sanitiseHTML';

const Quotes = ({ unsafeHtml }) => {
  return (
    <p className="section__quotes">
      "{unsafeHtml}"
    </p>
  );
};

export default Quotes;
