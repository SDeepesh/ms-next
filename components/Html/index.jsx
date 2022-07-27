import sanitizeHTML from './../../utils/sanitiseHTML';

const Html = ({ unsafeHtml }, props) => {
  return (
    <div
      {...props}
      dangerouslySetInnerHTML={{
        __html: sanitizeHTML(unsafeHtml),
      }}
    />
  );
};

export default Html;
