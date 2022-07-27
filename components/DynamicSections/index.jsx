import sectionsNames from './sectionsNames';
import sectionsMappings from './sectionsMappings';
import getDynamicSectionFromFieldGroupName from './getDynamicSectionFromFieldGroupName';

import Image from '../Sections/Image';
import Text from '../Sections/Text';
import Quotes from '../Sections/Quotes';
import CallToActionFullwidth from '../Sections/CallToActionFullWidth';
import TopThreeTips from '../Sections/TopThreeTips';
import Video from '../Sections/Video';
import HelpfulGuides from '../Sections/HelpfulGuides';
import CDF from '../Sections/CDF';
import Calculator from '../Sections/Calculator';

const DynamicSections = ({ sections }) => {
  return sections.map((section) => {
    const fieldGroupName = section.fieldGroupName;
    const sectionName = getDynamicSectionFromFieldGroupName(fieldGroupName, sectionsMappings);
    const hasGuides = section?.guides?.length;
    switch (sectionName) {
      case sectionsNames.VIDEO:
        return <Video videoId={section.videoId} />;
      case sectionsNames.HELPFUL_GUIDES:
        return hasGuides && <HelpfulGuides guides={section.guides} />;
      case sectionsNames.CALL_TO_ACTION_FULLWIDTH:
        return (
          <CallToActionFullwidth
            ctaText={section.ctaText}
            mainText={section.mainText}
            ctaUrl={section.ctaUrl}
          />
        );
      case sectionsNames.IMAGE:
        return section?.image?.sourceUrl ?
        (<Image url={section?.image?.sourceUrl} />) :
        section?.image?.mediaItemUrl ?
        (<Image url={section?.image?.mediaItemUrl} />) :
        null;
      case sectionsNames.QUOTE:
        return <Quotes unsafeHtml={section.quote} />;
      case sectionsNames.TEXT:
        return <Text unsafeHtml={section.content} />;
      case sectionsNames.TOP_THREE_TIPS:
        return <TopThreeTips tips={section.tips.tip} />;
      case sectionsNames.CDF:
        return <CDF />;
      case sectionsNames.CALCULATOR:
        return <Calculator classNames={'calculator--light'} />;

      default:
        return null;
    }
  });
};

export default DynamicSections;
