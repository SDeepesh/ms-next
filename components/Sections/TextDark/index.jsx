import sanitizeHTML from './../../utils/sanitiseHTML';

const TextDark = ({ unsafeHtml }, props) => {
  return (
    <div
      {...props}
      dangerouslySetInnerHTML={{
        __html: sanitizeHTML(unsafeHtml),
      }}
    />
  );
};

export default TextDark;
