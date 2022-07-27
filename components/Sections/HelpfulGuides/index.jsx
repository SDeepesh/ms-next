const HelpfulGuides = ({ guides }) => {
  return (
    <div className="section__helpful-guides">
      <h3>Our helpful guides</h3>
      <div>
        <ul>
          {guides.map((guide) => {
            const hasNoLinkText = !guide.linkText;
            let guideUrl = '';

            switch (guide?.guide?.contentTypeName) {
              case 'template':
                guideUrl = `${guide.guide.templateTopics.nodes[0]?.slug}/${guide.guide.slug}`;
                break;

              case 'article':
                guideUrl = `${guide.guide.siteTopics.nodes[0]?.slug}/${guide.guide.slug}`;
                break;

              default:
                guideUrl = guide?.guide?.link;
            }

            if (hasNoLinkText) {
              return null;
            }

            const finalGuideUrl = guideUrl?.replace('https://cms.monacosolicitors.co.uk', '');

            return (
              <li>
                <a href={finalGuideUrl}>{guide.linkText}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HelpfulGuides;
