const CallToActionFullwidth = ({ mainText, ctaText, ctaUrl }) => {
  return (
    <div className="section__call-to-action-fullwidth">
      <p>{mainText}</p>
      <a href={ctaUrl}>{ctaText}</a>
    </div>
  );
};

export default CallToActionFullwidth;
