import sanitizeHTML from '../../../utils/sanitiseHTML';

const Text = ({ unsafeHtml }) => {
  return (
    <div
      className="section__text"
      dangerouslySetInnerHTML={{
        __html: sanitizeHTML(unsafeHtml),
      }}
    />
  );
};

export default Text;
